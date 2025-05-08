import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Dr. Abhishek Ranjan",
    message: "Excellent service and behavior",
    rating: 10,
    image: "/testimonials/abhishek.jpg",
  },
  {
    name: "Sujata Kumari",
    message: "Maurya Shares and Stock Brokers ke saath mera bahut he achha anubhav raha hai.",
    rating: 10,
    image: "/testimonials/sujata.jpg",
  },
  {
    name: "Dr. Prem Kumar",
    message:
      "Maurya Shares & Stock Brokers P Ltd, like any business, strives to provide top-notch service. Professionalism and Expertise, Prompt Response and Efficient Service and Effective Problem Solving attitude of Ms. Ruby Kumari is praiseworthy. My association with this organisation is more than 25 years.",
    rating: 9,
    image: "/testimonials/prem.jpg",
  },
  {
    name: "Prabhakar Tiwari",
    message: "I have my good experience with Maurya Shares and Brokers",
    rating: 10,
    image: "/testimonials/prabhakar.jpg",
  },
  {
    name: "Ajay Kumar",
    message:
      "I have joined Maurya Shares and Stock Brokers Pvt. Ltd. since 2015. My mutual funds gain is excellent.",
    rating: 10,
    image: "/testimonials/ajay.jpg",
  },
  {
    name: "Archit Sahu",
    message: "Has been amazing helping us solving our questions",
    rating: 10,
    image: "/testimonials/archit.jpg",
  },
  {
    name: "Satish Agarwal",
    message: "Very good service with knowledge",
    rating: 10,
    image: "/testimonials/satish.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pauseRef = useRef(false);

  const visibleTestimonials = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseRef.current) {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / visibleTestimonials));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => {
    setCurrentIndex(i);
  };

  const groupTestimonials = [];
  for (let i = 0; i < testimonials.length; i += visibleTestimonials) {
    groupTestimonials.push(testimonials.slice(i, i + visibleTestimonials));
  }

  return (
    <section
      className="bg-background text-white py-20 px-6 md:px-12 border-t border-darkGold"
      onMouseEnter={() => (pauseRef.current = true)}
      onMouseLeave={() => (pauseRef.current = false)}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
          Testimonials
        </h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
          {groupTestimonials[currentIndex].map((t, i) => (
            <div
              key={i}
              className="border border-darkGold rounded-xl p-6 bg-black/40 backdrop-blur shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-darkGold object-cover mb-4"
              />
              <p className="text-gray-300 italic mb-4 text-sm">“{t.message}”</p>
              <div className="flex items-center justify-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(t.rating / 2) ? "text-yellow-400" : "text-gray-600"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg font-semibold text-white">{t.name}</p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {groupTestimonials.map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full ${
                currentIndex === i ? "bg-primary" : "bg-gray-500"
              } transition duration-300`}
              onClick={() => handleDotClick(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
