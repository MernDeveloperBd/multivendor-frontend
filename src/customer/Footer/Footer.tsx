
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import bkash from "../../assets/bkash_logo.png";
import nagad from "../../assets/nagad.png";
import bank from "../../assets/bank.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 via-gray-800 to-teal-700 text-gray-200 px-6 pt-12 pb-6">
      {/* Main Footer Content */}
      <div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left">
        {/* Quick as */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white relative inline-block">
            Quick as
            <span className="absolute -bottom-1 left-0 w-12 h-1 bg-teal-500 rounded"></span>
          </h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
            <li><a href="/terms" className="hover:text-teal-400 transition">Terms & Conditions</a></li>
            <li><a href="/collections" className="hover:text-teal-400 transition">Collections</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white relative inline-block">
            Contact Info
            <span className="absolute -bottom-1 left-0 w-12 h-1 bg-teal-500 rounded"></span>
          </h2>
          <p>📞 +880 1794 889595</p>
          <p>📧 marifamisam@gmail.com</p>
          <p>🏠 Nawabgonj, Dhaka</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white relative inline-block">
            Follow Us
            <span className="absolute -bottom-1 left-0 w-12 h-1 bg-teal-500 rounded"></span>
          </h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://www.facebook.com/MisamMarifaFashionWorld" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white relative inline-block">
            Company
            <span className="absolute -bottom-1 left-0 w-12 h-1 bg-teal-500 rounded"></span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            আমরা নিয়ে এসেছি আধুনিক ফ্যাশনের সাথে মানানসই কাপড় ও এক্সক্লুসিভ কালেকশন —
            যা আপনাকে দেবে আলাদা লুক ও আত্মবিশ্বাস। কোয়ালিটিতে আপস নয়, দামে সেরা অফার!
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm gap-3">
        <p>
          © {new Date().getFullYear()} — All rights reserved by{" "}
          <a href="/" className="font-semibold text-teal-400 hover:underline">MM Fashion World</a>
        </p>

        {/* Payment logos */}
        <div className="flex gap-3 items-center">
          <span className="font-semibold">Payments:</span>
          <img src={bkash} alt="bkash" className="w-8 h-6 object-contain" />
          <img src={nagad} alt="nagad" className="w-8 h-6 object-contain" />
          <img src={bank} alt="bank" className="w-8 h-6 object-contain" />
        </div>

        <p>
          Designed by{" "}
          <a
            href="https://www.instagram.com/misammehzabin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Misam Mehzabin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;