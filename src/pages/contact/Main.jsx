import {FaInstagram,FaWhatsapp} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {FaPhoneVolume} from "react-icons/fa6"

function Main() {
  return (
    <div className="text-white">
      <section className="bg-black/70 px-6 py-20 md:px-10 rounded-md space-y-6">
        <h1 className="text-3xl font-serif font-semibold text-center text-gold-500">
          Contact Us
        </h1>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <p className="font-semibold text-xl">Socials:</p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/longmenafr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.link/jf3ch6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-5">
          <p className="font-semibold text-xl">Phone:</p>
          <a
            href="tel:07010815506"
            className="border-b-2 border-white pb-1 flex items-center gap-2 hover:text-gold-400"
          >
            Place a Call <FaPhoneVolume />
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-5">
          <p className="font-semibold text-xl">Email:</p>
          <a
            href="mailto:Okaforlotanna@gmail.com"
            className="border-b-2 border-white pb-1 flex items-center gap-2 hover:text-gold-400"
          >
            Send Us A Mail <HiOutlineMail />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Main
