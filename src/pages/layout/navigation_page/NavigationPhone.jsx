import  { useContext } from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Context } from "../../../Context/Context";

function NavigationPhone() {
  const { toggleNavBar, setToggleNavBar } = useContext(Context);

  const links_to_pages = [
    { page_link: "/", page: "home" },
    { page_link: "/events", page: "events" },
    { page_link: "/about", page: "about" },
    { page_link: "/contact", page: "contact" },
  ];

  return (
    <>
      {/* Overlay */}
      {toggleNavBar && (
        <div
          onClick={() => setToggleNavBar(false)}
          className="fixed inset-0 bg-black/50 z-10"
        />
      )}

      <motion.div
        variants={{
          initial: { x: -1000 },
          animate: {
            x: 0,
            transition: { type: "spring", stiffness: 80, damping: 20 },
          },
          exit: { x: -1000 },
        }}
        initial="initial"
        animate={toggleNavBar ? "animate" : "exit"}
        className="fixed z-20 px-4 py-6 text-white bg-primary-900 w-3/4 h-screen flex flex-col"
      >
        {/* Logo */}
        <section className="flex justify-center border-b border-neutral-200 pb-3 mb-4">
          <img src={logo} className="w-28" alt="logo" />
        </section>

        {/* Links */}
        <section className="capitalize text-lg tracking-wide font-medium flex flex-col gap-6">
          {links_to_pages.map((eachLink, index) => (
            <div
              onClick={() => setToggleNavBar(false)}
              key={index + "##"}
              className="text-center"
            >
              <NavLink
                to={eachLink.page_link}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-gold-500 font-semibold"
                      : "hover:text-gold-400"
                  }`
                }
              >
                {eachLink.page}
              </NavLink>
            </div>
          ))}
        </section>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="w-full bg-gold-500 text-primary-900 font-semibold py-2 rounded hover:bg-gold-600 transition">
            Enquire Now
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm font-light mt-4">
          &copy; Longmen Africa
        </p>
      </motion.div>
    </>
  );
}

export default NavigationPhone;
