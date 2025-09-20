import { year } from "../../util/date";
import logo from "../../assets/logo.png"; // if you have one
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary-900 text-neutral-50 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <img src={logo} alt="Longmen logo" className="w-24 mx-auto md:mx-0 mb-4" />
          <p className="text-sm text-neutral-200">
            Curating bespoke experiences in whisky, cigars, art, and private events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold-500 font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-gold-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="hover:text-gold-400 transition">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gold-400 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gold-400 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-gold-500 font-semibold mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-gold-400 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-gold-400 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-gold-400 transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700 mt-8 pt-4 text-center text-xs sm:text-sm">
        <p>
          All rights reserved | A Longmen Co-operation &copy; {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
