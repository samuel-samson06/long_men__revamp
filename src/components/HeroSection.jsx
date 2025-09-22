import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/slideImg1.jpg";
import slide2 from "../assets/slideImg2.jpg";
import slide3 from "../assets/slideImg3.jpg";
import Button from "./Button";

function HeroSection() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="p-1">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-serif text-center bg-black/60 px-4 sm:px-8">
              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-4">
                Where connoisseurs gather for exceptional cigars, fine whisky tastings, and captivating art in an atmosphere of refined sophistication.
              </p>
              <Button text="Contact Us" hrefLink="/contact" />
            </div>
            <img src={slide2} loading="lazy" className="w-full h-[500px] sm:h-[600px]   object-cover" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-serif text-center bg-black/60 px-4 sm:px-8">
              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed">
                Intimate gatherings where rare spirits, premium cigars, and thoughtful conversation create unforgettable moments among true connoisseurs.
              </p>
            </div>
            <img src={slide1} loading="lazy" className="w-full h-[500px] sm:h-[600px]   object-cover" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-serif text-center bg-black/60 px-4 sm:px-8">
              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                Where aged spirits meet timeless conversations. Join intimate gatherings of connoisseurs exploring rare single malts, premium cigars, and the art of refined discourse. Each session is carefully curated to create moments that linger long after the last sip.
              </p>
            </div>
            <img src={slide3} loading="lazy" className="w-full h-[500px] sm:h-[600px]   object-cover" />
          </div>
        </Slider>
      </div>

      {/* Bottom text */}
      <p className="text-center font-semibold px-5 py-8  text-sm sm:text-base md:text-xl md:py-16 lg:text-2xl max-w-4xl mx-auto leading-relaxed">
        At Longmen, we celebrate the finer things in life – the art of savoring a perfectly rolled cigar, the warmth of a well-aged whisky, and the joy of shared experiences. Our passion lies in curating exceptional moments for aficionados, connoisseurs, and seekers of refined pleasures.
      </p>
    </div>
  );
}

export default HeroSection;
