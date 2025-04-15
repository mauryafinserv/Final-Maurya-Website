import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧥 Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 📝 Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-6 leading-tight">
          Maurya Shares & Stock Brokers Pvt Ltd
        </h1>

        <p className="text-4xl md:text-6xl font-bold text-white mb-2 leading-snug">
          Creating Wealth,
        </p>
        <p className="text-4xl md:text-6xl font-bold text-white mb-8 leading-snug">
          for Generations!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-darkGold transition">
            Start Your Journey
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Open an Account
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Connect With Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
