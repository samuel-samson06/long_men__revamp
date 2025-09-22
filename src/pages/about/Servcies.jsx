function Services() {
  const services = [
    {
      id: 1,
      heading: "Events",
      write_up:
        "Join us for unforgettable evenings of elegance and joy, where candles flicker, jazz melodies fill the air, and laughter flows. From gallery openings to private tastings and charity auctions, every moment is a masterpiece.",
    },
    {
      id: 2,
      heading: "Whisky",
      write_up:
        "Indulge in the warmth of our whisky library, where every sip is a journey. Our selection of single malts, bourbons, and rare blends offers a world of flavors to explore.",
    },
    {
      id: 3,
      heading: "Art",
      write_up:
        "Enjoy the talents of local artists through vibrant masterpieces and stunning abstracts. Just as cigars evoke emotions and spark contemplation, art ignites the senses and inspires the soul.",
    },
    {
      id: 4,
      heading: "Cigars",
      write_up:
        "Discover the rich world of cigars in our carefully curated humidor, featuring treasures from Nicaragua, the Dominican Republic, and beyond. Each cigar tells a story of terroir, tradition, and craftsmanship.",
    },
  ];

  return (
    <section className="border-b-[3px] border-black px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-gray-200 px-5 py-6 rounded-md shadow-sm hover:shadow-lg transition duration-300"
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-serif mb-3">
            {service.id}.) {service.heading}
          </h2>
          <p className="italic font-medium text-sm md:text-base lg:text-lg leading-relaxed">
            {service.write_up}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Services;
