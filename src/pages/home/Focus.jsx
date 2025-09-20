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
    <div className="  items-center bg-gray-100 py-10 px-3 flex flex-col md:flex-row md:items-center md:justify-evenly gap-7">
      <h2 className="text-2xl font-semibold text-center md:text-left">
        Focus
      </h2>

      {focuses.map((item, index) => (
        <section
          key={index}
          className="relative w-fit group cursor-pointer"
        >
          {/* Overlay */}
          <p
            className="absolute inset-0 flex items-center justify-center 
            rounded-md bg-black/60 text-white uppercase font-semibold text-lg 
            text-center transition-all duration-300 group-hover:text-xl"
          >
            {item.title}
          </p>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-64 md:w-72 min-[430px]:w-80 min-[560px]:w-[390px] rounded-md"
          />
        </section>
      ))}
    </div>
  );
}

export default Focus;
