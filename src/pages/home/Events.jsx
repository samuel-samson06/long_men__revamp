import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event3.jpg";
import event3 from "../../assets/event4.webp";
import video1 from "../../assets/longmen_video.mp4";

const eventData = [
  {
    image: event2,
    date: "Tuesday 15th, November 2022",
    title: "A Tuesday in Paradise",
    description: "Exclusive sampling of aged single malts with master distillers",
  },
  {
    image: event1,
    date: "Saturday 30th, September 2023",
    title: "Exclusive Tasting of Balvenie",
    description: "Where contemporary art meets fine spirits in elegant harmony",
  },
  {
    image: event3,
    date: "Thursday 26th, November 2023",
    title: "Engage your senses",
    description: "An exclusive gathering celebrating the finest in luxury lifestyle",
  },
];

function Events() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // default (mobile)
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, // < lg (mobile + md)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 3000, // lg and above
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="shadow-sm py-10 bg-white">
        <h1 className="text-center text-2xl md:text-3xl font-semibold">
          Signature Experiences
        </h1>

        <div className="px-2 mt-6">
          <div className="slider-container-2">
            <Slider {...settings}>
              {eventData.map((event) => (
                <div
                  key={event.date}
                  className="flex md:flex-row flex-col items-center justify-items-center py-5 overflow-hidden"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="md:w-1/3 h-64 object-cover rounded-md shadow-sm"
                  />
                  <div className="p-6 md:w-2/3 text-center md:text-left">
                    <div className="text-blue-600 font-semibold mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-100 flex flex-col gap-3 py-10 px-3 md:px-8">
        <p className="text-lg  md:text-2xl text-center">Engage your senses</p>
        <p className="text-center text-base md:text-lg font-sans md:max-w-2xl mx-auto">
          Highlights from &quot;Engage your senses&quot; where we engaged the 5 senses of
          our guests in the best way
        </p>
        <video
          src={video1}
          controls
          className="w-full max-w-4xl mx-auto rounded-md shadow-md"
        ></video>
      </div>
    </>
  );
}

export default Events;
