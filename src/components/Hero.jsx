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
        {/* ✅ Company Name with 3D Effect */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-6 leading-tight drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
          Maurya Shares & Stock Brokers Pvt Ltd
        </h1>

        <p className="text-4xl md:text-6xl font-bold text-white mb-2 leading-snug">
          Creating Wealth,
        </p>
        <p className="text-4xl md:text-6xl font-bold text-white mb-8 leading-snug">
          for Generations!
        </p>

        {/* ✅ Single Button */}
        <div className="flex justify-center">
          <button className="bg-primary text-black px-8 py-4 rounded-full font-semibold hover:bg-darkGold transition text-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
