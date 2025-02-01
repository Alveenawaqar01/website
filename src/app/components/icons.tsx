import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { LuChefHat } from 'react-icons/lu';

const Burger = () => {
  return (
    <>
      {/* Rectangle div */}
      <div className="w-full max-w-[1600px] bg-black shadow-md  flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16 px-4 py-8">
        {/* Icon 1 */}
        <div className="text-center text-yellow-500 flex flex-col items-center">
          <LuChefHat className="text-6xl sm:text-7xl md:text-8xl" />
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-white">Chef</p>
        </div>
        {/* Icon 2 */}
        <div className="text-center text-yellow-500 flex flex-col items-center">
          <GiKnifeFork className="text-6xl sm:text-7xl md:text-8xl" />
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-white">Dining</p>
        </div>
        {/* Icon 3 */}
        <div className="text-center text-yellow-500 flex flex-col items-center">
          <FaPizzaSlice className="text-6xl sm:text-7xl md:text-8xl" />
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-white">Experience</p>
        </div>
        {/* Icon 4 */}
        <div className="text-center text-yellow-500 flex flex-col items-center">
          <IoFastFoodOutline className="text-6xl sm:text-7xl md:text-8xl" />
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-white">Customer</p>
        </div>
      </div>
    </>
  );
}

export default Burger;
