import React from "react";

const basics = [
  {
    title: "What is a Mutual Fund?",
    description: "Understand the basics of mutual funds and how they work.",
    link: "/mutual-fund-basics",
    image: "/images/mutual-fund.png",
  },
  {
    title: "Types of Portfolio Management Services (PMS)",
    description: "Explore discretionary, non-discretionary and advisory PMS options.",
    link: "/pms-types",
    image: "/images/pms.png",
  },
  {
    title: "What are Alternative Investment Funds (AIF)?",
    description: "An overview of AIF categories and their investment strategies.",
    link: "/aif-explained",
    image: "/images/aif.png",
  },
  {
    title: "Basics of Fundamental Analysis",
    description: "Learn how to evaluate companies based on financial metrics.",
    link: "/fundamental-analysis",
    image: "/images/fundamentals.png",
  },
];

const latestArticles = [
  {
    title: "FY 2024-25: A Year of Volatility & Opportunity",
    link: "https://drive.google.com/file/d/your-file-id/view",
    date: "April 2025",
  },
  {
    title: "Why SIPs Are Still the Best Strategy in 2025",
    link: "https://drive.google.com/file/d/your-file-id/view",
    date: "March 2025",
  },
];

const KnowledgeCorner = () => {
  return (
    <section className="bg-background text-text py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center animate-fade-up">
          Knowledge Corner
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 animate-fade-up delay-100">
          Curated insights and educational content to guide your financial journey.
        </p>

        {/* 📘 Educational Articles */}
        <h3 className="text-2xl font-semibold text-primary mb-6 animate-fade-up delay-200">
          Investment Basics
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {basics.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow border border-darkGold group transform transition-transform duration-300 hover:scale-105 animate-fade-up"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
                <a
                  href={item.link}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 📰 Latest Articles */}
        <h3 className="text-2xl font-semibold text-primary mb-6 animate-fade-up delay-300">
          Latest Articles
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {latestArticles.map((item, index) => (
            <div
              key={index}
              className="bg-black/60 p-6 rounded-lg border border-darkGold shadow hover:shadow-lg transform transition-transform duration-300 hover:scale-105 animate-zoom-in"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <h4 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm mb-3">{item.date}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View PDF →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCorner;
