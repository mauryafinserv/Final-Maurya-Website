import React from "react";

const Hero = () => {
  const bgStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1950&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="relative h-screen text-white flex items-center justify-center"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Creating Wealth, for Generations!
        </h1>
        <p className="text-lg md:text-xl font-light mb-8">
          We help families build a legacy through smart investing — guiding each
          generation toward long-term wealth creation with trust, expertise, and
          care.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Start Your Journey
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Open an Account
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition">
            Talk to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;