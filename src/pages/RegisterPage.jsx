import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    arn: "", full_name: "", firm_name: "", email: "", mobile: "", password: "", euin: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    if (!form.arn || !form.full_name || !form.firm_name || !form.email || !form.mobile || !form.password) {
      setError("Please fill all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, arn: form.arn.trim().toUpperCase() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed. Please try again.");
      } else {
        setSuccess("Account created! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="mb-10">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">MF Content Tool</p>
          <h1 className="text-4xl font-black text-white mb-2">Create account</h1>
          <p className="text-gray-400 text-sm">Register with your AMFI ARN details.</p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">ARN Number <span className="text-primary">*</span></p>
            <input name="arn" value={form.arn} onChange={handleChange}
              placeholder="e.g. ARN-112272"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Full Name <span className="text-primary">*</span></p>
            <input name="full_name" value={form.full_name} onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Firm Name <span className="text-primary">*</span></p>
            <input name="firm_name" value={form.firm_name} onChange={handleChange}
              placeholder="Your firm or company name"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Mobile Number <span className="text-primary">*</span></p>
            <input name="mobile" value={form.mobile} onChange={handleChange}
              placeholder="10 digit mobile number"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Email <span className="text-primary">*</span></p>
            <input name="email" value={form.email} onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">Password <span className="text-primary">*</span></p>
            <input name="password" type="password" value={form.password} onChange={handleChange}
              placeholder="Minimum 8 characters"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          <div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">EUIN <span className="text-gray-700">(optional)</span></p>
            <input name="euin" value={form.euin} onChange={handleChange}
              placeholder="e.g. E123456"
              className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700" />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          <button onClick={handleRegister} disabled={loading}
            className={`w-full py-4 text-sm font-bold tracking-wide transition ${loading ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-primary text-black hover:bg-white"}`}>
            {loading ? "Creating account..." : "Create Account →"}
          </button>

          <p className="text-gray-600 text-sm text-center">
            Already registered?{" "}
            <Link to="/login" className="text-primary hover:underline">Login here</Link>
          </p>
        </div>

        <p className="text-gray-800 text-xs text-center mt-10">
          Maurya Shares & Stock Brokers Pvt. Ltd. · ARN-112272
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
