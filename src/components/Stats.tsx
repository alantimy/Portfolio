import React from 'react';

export function Stats() {
  const words = [
    "I BUILD DIGITAL EXPERIENCES THAT MATTER",
    "DESIGN",
    "DEVELOP",
    "DELIVER"
  ];

  return (
    <section className="bg-[#0a0a0a] py-[48px] md:py-[60px] border-y border-[rgba(255,255,255,0.06)] overflow-hidden w-full flex items-center">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            align-items: center;
            width: max-content;
            animation: marquee 14s linear infinite;
          }
        `}
      </style>

      <div className="animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            {words.map((word, j) => (
              <div key={j} className="flex items-center">
                <span className="text-6xl md:text-8xl font-bold uppercase tracking-[4px] text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#606060]">
                  {word}
                </span>
                <span className="text-white/30 text-4xl md:text-5xl mx-8 md:mx-12 font-light">
                  ·
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
