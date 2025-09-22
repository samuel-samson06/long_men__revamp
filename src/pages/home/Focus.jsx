/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/focus_art.jpg";
import image2 from "../../assets/focus_elvis.jpg";
import image3 from "../../assets/focus_lotana.jpg";

const focuses = [
  {
    title: "Art",
    image: image1,
  },
  {
    title: "Whisky",
    image: image3,
  },
  {
    title: "Cigars",
    image: image2,
  },
];

function Focus() {
  return (
    <div className="bg-gray-100 py-10 px-3">
     
      <h2 className="text-2xl  md:text-3xl lg:text-4xl font-semibold text-center pt-3 pb-10">
        Focus
      </h2>

      <div className="flex flex-col md:flex-row items-center md:justify-evenly gap-8 md:gap-10 lg:gap-12 px-6 sm:px-10">
        {focuses.map((item, index) => (
          <section
            key={index}
            className="relative w-fit group cursor-pointer"
          >
            <p
              className="absolute inset-0 flex items-center justify-center 
              rounded-md bg-black/60 text-white uppercase font-semibold 
              text-base sm:text-lg md:text-xl lg:text-2xl text-center 
              transition-all duration-300 group-hover:scale-105"
            >
              {item.title}
            </p>

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-64 sm:w-72 md:w-80 xl:w-96 rounded-md object-cover shadow-md"
            />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Focus;
