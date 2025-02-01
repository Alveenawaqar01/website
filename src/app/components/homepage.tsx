import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Food = () => {
  return (
    <div className="bg-white text-black py-16 px-8 pt-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Text content */}
        <div className="space-y-8">
          <div className="text-3xl text-green-900 font-semibold">About Us</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            <span className="text-green-900">Food</span> Create the best
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">foody product</h1>
          <p className="text-lg text-gray-600">
          Expertly Prepared Our skilled chefs prepare each dish with care and precision Unique and Flavorful We constantly experiment with new flavors Our chefs are passionate
           about bringing you authentic flavors from around the world Exceptional Service          </p>

          {/* Buttons Container with gap */}
          <div className="flex flex-wrap gap-6 justify-start">
            {/* Filled Button */}
            <button className="bg-green-800 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition">
              Show More
            </button>

            {/* Border Button (Stroke) with FaPlay icon */}
            <button className="border-2 border-green-800 text-green-800 py-3 px-8 rounded-lg flex items-center space-x-2 hover:bg-green-100 transition">
              <FaPlay />
              <span>Watch Now</span>
            </button>
          </div>
        </div>

        {/* Right Section - Image options */}
        <div className="flex flex-col space-y-6">
          {/* Large Image with reduced height and shadow */}
          <img
            src="/lemon.jpeg"
            alt="Food Image 1"
            className="w-full h-60 lg:h-90 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
          />

          {/* Smaller Images Below */}
          <div className="flex space-x-2 flex-wrap">
            <img
              src="/salad.jpeg"
              alt="Food Image 2"
              className="w-full h-60 lg:h-90 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
