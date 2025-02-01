import Link from 'next/link';
import React from 'react';

const Chef = () => {
  return (
    <div className="p-2 bg-black">
      {/* Main heading for the food items */}
      <h2 className="text-yellow-600 text-center text-3xl md:text-5xl mt-10 mb-10 font-extrabold">
        Meet Our Chef
      </h2>

      {/* Grid Layout for Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {/* Card 1 */}
        <div className="text-center hover:shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="/pic1.png"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Card 2 */}
        <div className="text-center hover:shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="/pic2.png"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Card 3 */}
        <div className="text-center hover:shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="/pic4.png"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Card 4 */}
        <div className="text-center hover:shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="/pic3.png"
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Centering the button */}
      <div className="flex justify-center mt-6">
        <Link href = {"/chef"} className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-red-600 text-xl">
          See Menu
        </Link>
      </div>
    </div>
  );
};

export default Chef;
