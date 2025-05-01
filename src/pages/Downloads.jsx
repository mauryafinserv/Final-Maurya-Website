// src/pages/Downloads.jsx
import React from "react";

const Downloads = () => {
  return (
    <section className="py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Downloads</h1>

        <div className="space-y-8">
          {/* MyWealth */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">MyWealth App</h2>
            <ul className="list-disc ml-6 text-blue-600 underline">
              <li>
                <a href="https://apps.apple.com/in/app/my-wealth/id1116107323" target="_blank" rel="noopener noreferrer">
                  Download for iOS
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=mobi.mywealth" target="_blank" rel="noopener noreferrer">
                  Download for Android
                </a>
              </li>
            </ul>
          </div>

          {/* Kotak Neo */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Kotak Neo App</h2>
            <ul className="list-disc ml-6 text-blue-600 underline">
              <li>
                <a href="https://apps.apple.com/in/app/kotak-neo-stock-market-trading/id1553056779" target="_blank" rel="noopener noreferrer">
                  Download for iOS
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.kotak.neo" target="_blank" rel="noopener noreferrer">
                  Download for Android
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
