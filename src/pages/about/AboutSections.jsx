// AboutSections.jsx
import { Fragment } from "react";

function AboutSections() {
  const sections = [
    {
      id: 1,
      title: "Our Story",
      text: "Longmen was born from a desire to elevate life’s most timeless pleasures. What began as intimate whisky tastings among friends has evolved into a private circle of connoisseurs who appreciate the rare, the refined, and the unforgettable. Each gathering is crafted not just as an event, but as a memory etched in time.",
    },
    {
      id: 2,
      title: "Our Philosophy",
      text: "At Longmen, luxury is not about excess — it’s about intention. We believe in savoring moments, whether through the ritual of a cigar, the depth of a fine dram, or the power of art that stirs the soul. Our philosophy is simple: curate with taste, host with grace, and create experiences that linger long after the night ends.",
    },
    {
      id: 3,
      title: "Exclusivity",
      text: "What makes Longmen truly unique is not just our events, but our ethos. We are not open to everyone — only to those who share our respect for craft and culture. Every experience is by invitation or bespoke request, ensuring privacy, intimacy, and authenticity. In a world of noise, Longmen is a sanctuary of refinement.",
    }
  ];

  return (
    <Fragment>
      <section className="px-6 py-12 space-y-12 bg-white">
        {sections.map((sec) => (
          <div
            key={sec.id}
            className="max-w-4xl mx-auto text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              {sec.title}
            </h2>
            <p className="text-gray-700 leading-relaxed italic md:text-lg">
              {sec.text}
            </p>
          </div>
        ))}
      </section>
    </Fragment>
  );
}

export default AboutSections;
