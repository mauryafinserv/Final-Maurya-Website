// src/pages/AdminPage.jsx
import React, { useState, useEffect } from "react";

const ADMIN_KEY = "maurya-admin-2026-xK9pL3mN";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editLimits, setEditLimits] = useState({});
  const [savingLimits, setSavingLimits] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users", {
        headers: { "x-admin-key": ADMIN_KEY },
      });
      const data = await res.json();
      if (data.users) {
        setUsers(data.users);
        // Initialize edit limits state
        const limits = {};
        data.users.forEach(u => {
          limits[u.arn] = {
            posts_limit: u.posts_limit ?? 20,
            images_limit: u.images_limit ?? 20,
          };
        });
        setEditLimits(limits);
      } else setError("Failed to load users");
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const updateStatus = async (arn, status) => {
    setUpdating(arn);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
        body: JSON.stringify({ arn, status }),
      });
      const data = await res.json();
      if (data.user) {
        setUsers(users.map(u => u.arn === arn ? { ...u, status } : u));
      }
    } catch {
      alert("Failed to update user");
    }
    setUpdating(null);
  };

  const saveLimits = async (arn) => {
    setSavingLimits(arn);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
        body: JSON.stringify({
          arn,
          posts_limit: parseInt(editLimits[arn].posts_limit),
          images_limit: parseInt(editLimits[arn].images_limit),
        }),
      });
      const data = await res.json();
      if (data.user) {
        setUsers(users.map(u => u.arn === arn ? {
          ...u,
          posts_limit: editLimits[arn].posts_limit,
          images_limit: editLimits[arn].images_limit
        } : u));
        alert(`Limits updated for ${arn}`);
      }
    } catch {
      alert("Failed to update limits");
    }
    setSavingLimits(null);
  };

  const filtered = users.filter(u => {
    const matchFilter = filter === "all" || u.status === filter;
    const matchSearch = !search ||
      u.arn.toLowerCase().includes(search.toLowerCase()) ||
      u.full_name.toLowerCase().includes(search.toLowerCase()) ||
      u.firm_name.toLowerCase().includes(search.toLowerCase()) ||
      u.mobile.includes(search);
    return matchFilter && matchSearch;
  });

  const counts = {
    all: users.length,
    pending: users.filter(u => u.status === "pending").length,
    active: users.filter(u => u.status === "active").length,
    blocked: users.filter(u => u.status === "blocked").length,
  };

  const statusColor = (status) => {
    if (status === "active") return "text-green-400 bg-green-400/10 border-green-400/20";
    if (status === "pending") return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
    if (status === "blocked") return "text-red-400 bg-red-400/10 border-red-400/20";
    return "";
  };

  return (
    <section className="bg-black text-white min-h-screen pt-24 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3">Admin</p>
          <h1 className="text-4xl font-black mb-2">User Dashboard</h1>
          <p className="text-gray-500 text-sm">Manage all registered users — approve, block, or set custom limits.</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Users", value: counts.all, color: "text-white" },
            { label: "Pending", value: counts.pending, color: "text-yellow-400" },
            { label: "Active", value: counts.active, color: "text-green-400" },
            { label: "Blocked", value: counts.blocked, color: "text-red-400" },
          ].map(s => (
            <div key={s.label} className="bg-gray-950 border border-gray-800 p-5">
              <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-6 items-center justify-between">
          <div className="flex gap-2">
            {["all", "pending", "active", "blocked"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-semibold border transition capitalize ${filter === f ? "bg-primary text-black border-primary" : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"}`}>
                {f} ({counts[f]})
              </button>
            ))}
          </div>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search ARN, name, firm, mobile..."
            className="bg-gray-950 border border-gray-800 text-white text-sm px-4 py-2 focus:outline-none focus:border-primary placeholder-gray-700 w-72" />
        </div>

        <div className="flex justify-end mb-4">
          <button onClick={fetchUsers}
            className="text-xs text-primary border border-primary px-4 py-2 hover:bg-primary hover:text-black transition">
            ↻ Refresh
          </button>
        </div>

        {loading ? (
          <div className="text-gray-600 text-sm py-20 text-center animate-pulse">Loading users...</div>
        ) : error ? (
          <div className="text-red-400 text-sm py-20 text-center">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="text-gray-600 text-sm py-20 text-center">No users found.</div>
        ) : (
          <div className="space-y-4">
            {filtered.map(user => (
              <div key={user.arn} className="bg-gray-950 border border-gray-800 p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">

                  {/* User info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-sm">{user.arn}</span>
                      <span className={`text-xs px-2 py-0.5 border rounded-full ${statusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{user.full_name}</div>
                    <div className="text-gray-400 text-xs mb-2">{user.firm_name}</div>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <span>📱 {user.mobile}</span>
                      <span>✉️ {user.email}</span>
                      {user.euin && <span>EUIN: {user.euin}</span>}
                    </div>
                  </div>

                  {/* Usage + Limits */}
                  <div className="px-6 border-l border-gray-800 min-w-[200px]">
                    <div className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Usage & Limits</div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400 w-14">Posts:</span>
                      <span className="text-white font-semibold text-xs">{user.posts_used}</span>
                      <span className="text-gray-600 text-xs">/</span>
                      <input
                        type="number"
                        min="0"
                        max="999"
                        value={editLimits[user.arn]?.posts_limit ?? 20}
                        onChange={e => setEditLimits({
                          ...editLimits,
                          [user.arn]: { ...editLimits[user.arn], posts_limit: e.target.value }
                        })}
                        className="w-14 bg-gray-900 border border-gray-700 text-white text-xs px-2 py-1 focus:outline-none focus:border-primary text-center"
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-400 w-14">Images:</span>
                      <span className="text-white font-semibold text-xs">{user.images_used}</span>
                      <span className="text-gray-600 text-xs">/</span>
                      <input
                        type="number"
                        min="0"
                        max="999"
                        value={editLimits[user.arn]?.images_limit ?? 20}
                        onChange={e => setEditLimits({
                          ...editLimits,
                          [user.arn]: { ...editLimits[user.arn], images_limit: e.target.value }
                        })}
                        className="w-14 bg-gray-900 border border-gray-700 text-white text-xs px-2 py-1 focus:outline-none focus:border-primary text-center"
                      />
                    </div>

                    <button
                      onClick={() => saveLimits(user.arn)}
                      disabled={savingLimits === user.arn}
                      className="w-full px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black transition">
                      {savingLimits === user.arn ? "Saving..." : "Save Limits"}
                    </button>

                    <div className="text-xs text-gray-600 mt-2">
                      Joined: {new Date(user.created_at).toLocaleDateString('en-IN')}
                    </div>
                    {user.last_login && (
                      <div className="text-xs text-gray-700 mt-1">
                        Last: {new Date(user.last_login).toLocaleDateString('en-IN')}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    {user.status !== "active" && (
                      <button onClick={() => updateStatus(user.arn, "active")}
                        disabled={updating === user.arn}
                        className="px-4 py-2 text-xs font-bold bg-green-500/10 text-green-400 border border-green-400/20 hover:bg-green-500 hover:text-black transition">
                        {updating === user.arn ? "..." : "✓ Approve"}
                      </button>
                    )}
                    {user.status !== "pending" && (
                      <button onClick={() => updateStatus(user.arn, "pending")}
                        disabled={updating === user.arn}
                        className="px-4 py-2 text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-500 hover:text-black transition">
                        {updating === user.arn ? "..." : "⏸ Pending"}
                      </button>
                    )}
                    {user.status !== "blocked" && (
                      <button onClick={() => updateStatus(user.arn, "blocked")}
                        disabled={updating === user.arn}
                        className="px-4 py-2 text-xs font-bold bg-red-500/10 text-red-400 border border-red-400/20 hover:bg-red-500 hover:text-black transition">
                        {updating === user.arn ? "..." : "✗ Block"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminPage;
