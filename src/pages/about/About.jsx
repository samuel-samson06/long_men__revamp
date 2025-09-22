import { Fragment } from "react";
import Services from "../about/Servcies";
import Brands from "../about/Brands";
import AboutSections from "../about/AboutSections";

function About() {
  return (
    <Fragment>
      <div>
        {/* Banner Section */}
        <header className="relative h-[300px] sm:h-[450px] md:h-[550px]">
          <div className="bg-[url(assets/aboutBg.jpg)] bg-cover bg-center bg-no-repeat w-full h-full border-t-2 border-white relative">
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white text-base bg-black/80 px-6 py-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3">
                At Longmen
              </h1>
              <p className="text-center md:max-w-2xl lg:max-w-3xl italic font-light leading-relaxed text-sm sm:text-base md:text-lg">
                Our brand is dedicated to crafting moments of warmth, connection
                and beauty through the perfect smoke, the comfort of fine
                tumblers, or the magic of shared experiences.
              </p>
            </section>
          </div>
        </header>

        {/* Narrative Sections */}
        <AboutSections />

        {/* Services & Brands */}
        <main>
          <Services />
          <Brands />
        </main>
      </div>
    </Fragment>
  );
}

export default About;
