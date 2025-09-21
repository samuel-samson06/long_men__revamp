import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/slideImg1.jpg";
import slide2 from "../assets/slideImg2.jpg";
import slide3 from "../assets/slideImg3.jpg";

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
        pauseOnHover: false   
    };

  return (
    <>
    <div className=" p-1">
        <div className="slider-container">
            <Slider {...settings}>
                <div className=" bg-red-900 relative">
                    <div className=" flex flex-col items-center justify-center text-white font-medium px-3 text-lg font-serif text-center bg-black/60 h-full w-full absolute ">
                        <p>Where connoisseurs gather for exceptional cigars, fine whisky tastings, and captivating art in an atmosphere of refined sophistication.</p>

                    </div>
                    <img src={slide2} loading="lazy" />
                </div>
                <div className=" bg-red-900 relative">
                    <div className=" flex flex-col items-center justify-center text-white font-medium px-3 text-lg font-serif text-center bg-black/60 h-full w-full absolute ">
                        <p>League of quintessential gents 🥃</p>

                    </div>
                    <img src={slide1} loading="lazy" />
                </div>
                <div className=" bg-red-900 relative">
                    <div className=" flex flex-col items-center justify-center text-white font-medium px-3 text-lg font-serif text-center bg-black/60 h-full w-full absolute ">
                        <p>Private  whisky tasting, conversations, and cigars. 🥃</p>

                    </div>
                    <img src={slide3} loading="lazy" />
                </div>
            </Slider>
        </div>
        <p className=" text-center font-semibold px-5 py-8 md:py-10">
            At Longmen, we celebrate the finer things in life – the art of savoring a perfectly rolled cigar, the warmth of a well-aged whisky, and the joy of shared experiences. Our passion lies in curating exceptional moments for aficionados, connoisseurs, and seekers of refined pleasures.
        </p>
    </div>
    </>
  )
}

export default HeroSection
