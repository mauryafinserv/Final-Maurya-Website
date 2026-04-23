// src/pages/KYCForm.jsx
import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxabufm_WbpCbw3Ls-wf8TQl6S2bN8Y-eGKa-HqRZByc7pNp5YrbOQh9vTzPO_3wida/exec";

const inputClass = "w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm";
const labelClass = "block text-gray-400 text-xs uppercase tracking-widest mb-1";
const sectionClass = "border border-darkGold rounded-2xl p-6 md:p-8 bg-gray-950 mb-8";
const sectionTitle = "text-primary text-lg font-bold mb-6";

const KYCForm = () => {
  const [part, setPart] = useState(1);
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [docsSubmitted, setDocsSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "", address: "", dob: "", placeOfBirth: "",
    pan: "", aadhar: "", mobile: "", email: "",
    bankAccount: "", ifsc: "", micr: "", bankName: "", branch: "",
    fatherName: "", motherName: "", spouseName: "",
    nomineeName: "", nomineeDob: "", nomineeRelation: "",
    nomineeContact: "", nomineePan: "",
    qualification: "", occupation: "", annualIncome: "",
  });

  const [docs, setDocs] = useState({
    panCard: null, aadharCard: null, photograph: null, cheque: null,
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      resolve({ data: base64, mimeType: file.type, ext: file.name.split(".").pop() });
    };
    reader.onerror = reject;
  });

  const handleSubmitPart1 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "form", ...form }),
      });
      setSubmittedName(form.name);
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitDocs = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { type: "documents", clientName: submittedName };
      if (docs.panCard) payload.panCard = await toBase64(docs.panCard);
      if (docs.aadharCard) payload.aadharCard = await toBase64(docs.aadharCard);
      if (docs.photograph) payload.photograph = await toBase64(docs.photograph);
      if (docs.cheque) payload.cheque = await toBase64(docs.cheque);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setDocsSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Success screen after both parts
  if (docsSubmitted) {
    return (
      <section className="bg-background text-text min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-primary mb-4">All Done!</h2>
          <p className="text-gray-300 mb-2">Your KYC details and documents have been submitted successfully.</p>
          <p className="text-gray-400 text-sm">Our team will get back to you within 48 hours.</p>
          <p className="text-gray-400 text-sm mt-2">For queries: <a href="tel:7004016074" className="text-primary">+91 7004016074</a></p>
        </div>
      </section>
    );
  }

  // After Part 1 submitted — show Part 2
  if (submitted) {
    return (
      <section className="bg-background text-text py-16 px-6 md:px-12 font-sans">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-primary mb-2">Details Submitted!</h2>
            <p className="text-gray-300">Thank you, <span className="text-white font-semibold">{submittedName}</span>. Your personal and financial details have been saved.</p>
          </div>

          {/* Part 2 */}
          <div className="border border-primary rounded-2xl p-6 md:p-8 bg-gray-950 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">OPTIONAL</span>
              <h3 className="text-white font-bold text-lg">Document Upload</h3>
            </div>
            <p className="text-yellow-400 text-sm mb-6 font-medium">
              ⚠️ Skip this section if your KYC is already validated.
            </p>

            <form onSubmit={handleSubmitDocs} className="space-y-6">
              {[
                { label: "PAN Card Xerox (Self-Attested)", key: "panCard" },
                { label: "Aadhar Card Xerox (Self-Attested)", key: "aadharCard" },
                { label: "Photograph", key: "photograph" },
                { label: "Cancelled Cheque", key: "cheque" },
              ].map((doc) => (
                <div key={doc.key}>
                  <label className={labelClass}>{doc.label}</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setDocs((prev) => ({ ...prev, [doc.key]: e.target.files[0] }))}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:bg-primary file:text-black"
                  />
                </div>
              ))}

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-primary text-black font-bold py-3 rounded-full hover:bg-darkGold transition disabled:opacity-50"
                >
                  {loading ? "Uploading..." : "Submit Documents →"}
                </button>
                <button
                  type="button"
                  onClick={() => setDocsSubmitted(true)}
                  className="flex-1 border border-gray-600 text-gray-400 font-semibold py-3 rounded-full hover:border-primary hover:text-primary transition"
                >
                  Skip — KYC Already Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Part 1 — Main Form
  return (
    <section className="bg-background text-text py-16 px-6 md:px-12 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Client KYC Form</h1>
          <p className="text-gray-400">Fill in your details below to begin your wealth journey with Maurya.</p>
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-primary text-black font-bold flex items-center justify-center text-xs">1</span>
              <span className="text-white">Personal & Financial Details</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full border border-gray-600 text-gray-500 font-bold flex items-center justify-center text-xs">2</span>
              <span className="text-gray-500">Document Upload</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmitPart1}>

          {/* Personal Details */}
          <div className={sectionClass}>
            <h3 className={sectionTitle}>Personal Details</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="As per PAN card" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Date of Birth *</label>
                <input name="dob" type="date" required value={form.dob} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Address *</label>
                <textarea name="address" required value={form.address} onChange={handleChange} placeholder="Full residential address" rows={2} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Place of Birth</label>
                <input name="placeOfBirth" value={form.placeOfBirth} onChange={handleChange} placeholder="City of birth" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Qualification</label>
                <input name="qualification" value={form.qualification} onChange={handleChange} placeholder="Highest qualification" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Father's Name *</label>
                <input name="fatherName" required value={form.fatherName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Mother's Name *</label>
                <input name="motherName" required value={form.motherName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Spouse Name</label>
                <input name="spouseName" value={form.spouseName} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </div>

          {/* Identity Details */}
          <div className={sectionClass}>
            <h3 className={sectionTitle}>Identity & Contact</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>PAN Number *</label>
                <input name="pan" required value={form.pan} onChange={handleChange} placeholder="ABCDE1234F" className={inputClass} maxLength={10} style={{textTransform: "uppercase"}} />
              </div>
              <div>
                <label className={labelClass}>Aadhar Number *</label>
                <input name="aadhar" required value={form.aadhar} onChange={handleChange} placeholder="XXXX XXXX XXXX" className={inputClass} maxLength={12} />
              </div>
              <div>
                <label className={labelClass}>Mobile Number *</label>
                <input name="mobile" required type="tel" value={form.mobile} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email ID *</label>
                <input name="email" required type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Occupation & Income */}
          <div className={sectionClass}>
            <h3 className={sectionTitle}>Occupation & Income</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Occupation *</label>
                <select name="occupation" required value={form.occupation} onChange={handleChange} className={inputClass}>
                  <option value="">Select occupation</option>
                  <option>Govt. Service</option>
                  <option>Private Service</option>
                  <option>Self-Employed</option>
                  <option>Retired</option>
                  <option>Housewife</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Annual Income Range *</label>
                <select name="annualIncome" required value={form.annualIncome} onChange={handleChange} className={inputClass}>
                  <option value="">Select range</option>
                  <option>1-5 Lac</option>
                  <option>5-10 Lac</option>
                  <option>10-25 Lac</option>
                  <option>25 Lac - 1 Cr</option>
                  <option>Above 1 Cr</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div className={sectionClass}>
            <h3 className={sectionTitle}>Bank Details</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Bank Account Number *</label>
                <input name="bankAccount" required value={form.bankAccount} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>IFSC Code *</label>
                <input name="ifsc" required value={form.ifsc} onChange={handleChange} placeholder="HDFC0001234" className={inputClass} style={{textTransform: "uppercase"}} />
              </div>
              <div>
                <label className={labelClass}>MICR Code *</label>
                <input name="micr" required value={form.micr} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Bank Name *</label>
                <input name="bankName" required value={form.bankName} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Branch *</label>
                <input name="branch" required value={form.branch} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </div>

          {/* Nominee Details */}
          <div className={sectionClass}>
            <h3 className={sectionTitle}>Nominee Details</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Nominee Name *</label>
                <input name="nomineeName" required value={form.nomineeName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Nominee Date of Birth *</label>
                <input name="nomineeDob" type="date" required value={form.nomineeDob} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Relation with Nominee *</label>
                <input name="nomineeRelation" required value={form.nomineeRelation} onChange={handleChange} placeholder="e.g. Spouse, Son, Daughter" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Nominee Contact No *</label>
                <input name="nomineeContact" type="tel" required value={form.nomineeContact} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Nominee PAN Number</label>
                <input name="nomineePan" value={form.nomineePan} onChange={handleChange} placeholder="ABCDE1234F" className={inputClass} maxLength={10} style={{textTransform: "uppercase"}} />
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 mb-6 border border-gray-800 rounded-xl p-4">
            By submitting this form, I confirm that the information provided is accurate and complete. I authorise Maurya Shares and Stock Brokers Private Limited (ARN-112272) to use this information for KYC and account opening purposes. Investment in securities market is subject to market risks.
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-black font-bold py-4 rounded-full text-lg hover:bg-darkGold transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Details & Continue →"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default KYCForm;
