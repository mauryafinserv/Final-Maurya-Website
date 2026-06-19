import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [arn, setArn] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!arn.trim() || !password.trim()) {
      setError("Please enter your ARN and password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ arn: arn.trim().toUpperCase(), password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
      } else {
        localStorage.setItem("mf_token", data.token);
        localStorage.setItem("mf_user", JSON.stringify(data.user));
        navigate("/content-tool");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-10">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">MF Content Tool</p>
          <h1 className="text-4xl font-black text-white mb-2">Welcome back</h1>
          <p className="text-gray-400 text-sm">Login with your ARN number and password.</p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">ARN Number</p>
            <input
              type="text"
              value={arn}
              onChange={(e) => setArn(e.target.value)}
              placeholder="e.g. ARN-112272"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700"
            />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-4 text-sm font-bold tracking-wide transition ${loading ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-primary text-black hover:bg-white"}`}>
            {loading ? "Logging in..." : "Login →"}
          </button>

          <p className="text-gray-600 text-sm text-center">
            New user?{" "}
            <Link to="/register" className="text-primary hover:underline">Create account</Link>
          </p>
        </div>

        <p className="text-gray-800 text-xs text-center mt-10">
          Maurya Shares & Stock Brokers Pvt. Ltd. · ARN-112272
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
