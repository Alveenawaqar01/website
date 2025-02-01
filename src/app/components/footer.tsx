import React from "react";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Top Section - Subscribe */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-6 py-12 md:px-32 md:py-20 pt-6 mt-4">
        <div className="text-white w-full md:w-[50%]">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-4">
            Make a smart logical choice here Its pretty easy
          </p>
        </div>

        <div className="flex mt-6 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-6 mr-2 w-full md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-3 md:px-6 w-full md:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D]" />

      {/* Bottom Section - Footer Links */}
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-32 py-6">
          {/* About Us */}
          <div>
            <h2 className="mb-4 text-[20px] md:text-[24px] font-semibold uppercase text-white">About Us</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[14px] md:text-[16px] font-normal">
                  Corporate clients and leisure travelers rely on Groundlink for dependable safe and professional chauffeured car services in major cities worldwide
                </p>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-10 h-10 md:w-16 md:h-16">
                  <PiClockClockwiseBold className="text-white text-[20px] md:text-[40px]" />
                </div>
                <div>
                  <h2 className="text-[12px] md:text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                  <h3 className="text-[10px] md:text-[14px] font-normal text-[#FFFFFF]">Mon Sat 8 AM 6 PM</h3>
                  <h3 className="text-[10px] md:text-[14px] font-normal text-[#FFFFFF]">Sunday Closed</h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-4 text-[20px] md:text-[24px] font-semibold uppercase text-white">Useful Links</h2>
            <ul className="text-yellow-500 font-medium">
              <li className="mb-4"><a href="/about" className="hover:underline">About</a></li>
              <li className="mb-4"><a href="/menu" className="hover:underline">Menu</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Partner</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Team</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">shop</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="mb-4 text-[20px] md:text-[24px] font-semibold uppercase text-white">Help</h2>
            <ul className="text-yellow-500 font-medium">
              <li className="mb-4"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Reporting</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Documentation</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Support Policy</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h2 className="mb-4 text-[20px] md:text-[24px] font-semibold uppercase text-white">Recent Post</h2>
            <ul className="text-gray-500 font-medium">
              <li className="flex gap-4">
                <img src="/blog1.png" alt="blog" className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-white">Blog Title</h3>
                  <p className="text-sm text-gray-400">Short description of the blog post</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Footer Credits */}
        <div className="w-full px-6 py-4 bg-yellow-500 flex flex-col sm:flex-row items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            2023 <a href="#" className="hover:underline">Flowbite</a> All Rights Reserved
          </span>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <FaYoutube />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded-full">
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
