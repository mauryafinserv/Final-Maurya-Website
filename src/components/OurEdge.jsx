// src/components/OurEdge.jsx
import React from "react";
import { Building2, BrainCircuit, Users, Briefcase, SlidersHorizontal, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: <ShieldCheck className="h-7 w-7 text-primary mb-3" />, title: "Transparency & Ethics", subtitle: "Zero Conflict. Pure Trust.", desc: "We operate with complete transparency — no hidden charges, no conflict of interest. Your trust is our most valuable asset.", tag: "Zero Conflict" },
  { icon: <Building2 className="h-7 w-7 text-primary mb-3" />, title: "30 Years of Legacy", subtitle: "Trusted Across Generations", desc: "Since our founding, we have partnered with HNI families, NRIs, and corporates to build wealth that endures beyond market cycles.", tag: "Est. 1990s" },
  { icon: <BrainCircuit className="h-7 w-7 text-primary mb-3" />, title: "AI-Powered Intelligence", subtitle: "Research Meets Technology", desc: "We leverage cutting-edge AI tools including Claude research and NGen market intelligence for sharper insights and smarter decisions.", tag: "Powered by AI" },
  { icon: <Briefcase className="h-7 w-7 text-primary mb-3" />, title: "One-Stop Financial Partner", subtitle: "Everything Under One Roof", desc: "From mutual fund distribution to equity broking, PMS, AIF, insurance, NPS, and tax planning — all under one trusted relationship.", tag: "Complete Solutions" },
  { icon: <SlidersHorizontal className="h-7 w-7 text-primary mb-3" />, title: "Personalised Planning", subtitle: "Your Goals. Your Strategy.", desc: "No two wealth journeys are alike. We craft bespoke strategies tailored to your life stage, risk appetite, and long-term aspirations.", tag: "Tailored for You" },
  { icon: <Users className="h-7 w-7 text-primary mb-3" />, title: "HNI & NRI Focused", subtitle: "Built for Those Who Think Beyond Ordinary", desc: "Our solutions are curated exclusively for high-net-worth individuals, NRI investors, and family offices.", tag: "Exclusive Access" },
];

const PillarCard = ({ pillar }) => (
  <div className="relative border border-darkGold rounded-xl p-5 bg-gray-950 hover:bg-gray-900 transition group overflow-hidden h-full">
    <span className="absolute top-4 right-4 text-xs text-primary border border-primary rounded-full px-3 py-1 font-mono">{pillar.tag}</span>
    {pillar.icon}
    <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{pillar.subtitle}</p>
    <p className="text-gray-400 text-xs leading-relaxed">{pillar.desc}</p>
    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500" />
  </div>
);

const OurEdge = () => (
  <section className="bg-black py-24 px-6 md:px-12 border-t border-darkGold">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">What Sets Us Apart</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">The Maurya Edge</h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => <PillarCard key={i} pillar={pillar} />)}
      </div>
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm italic">Timeless wisdom. Intelligent wealth. Built for those who aspire to leave a legacy.</p>
      </div>
    </div>
  </section>
);

export default OurEdge;
