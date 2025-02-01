import Image from "next/image";
import { BiCookie } from "react-icons/bi";
import { GiWineGlass } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center px-6 lg:px-20 py-10 gap-10">
      
      {/* Left Section (Images Grid) */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        {["/lemon.jpeg", "/burger.jpeg", "/chicken.jpeg", "/burger2.png"].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Food Image"
            width={250}
            height={180}
            className="rounded-lg object-cover w-full transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        ))}
      </div>

      {/* Right Section (Text and Features) */}
      <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
        {/* Section Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Ordinary Taste
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Extra And
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Experienced
          </h1>
        </div>

        {/* Paragraph Text */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Enjoy the finest dishes crafted with passion and expertise. Quisque diam pellentesque bibendum non dui
          volutpat fringilla bibendum Experience the joy of food like never before
        </p>

        {/* Features with Icons */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: <GiWineGlass className="text-4xl text-black" />, label: "Dinner" },
            { icon: <BiCookie className="text-4xl text-black" />, label: "Lunch" },
            { icon: <PiHamburger className="text-4xl text-black" />, label: "Fast Food" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <div className="bg-yellow-300 p-4 rounded-full shadow-md">{item.icon}</div>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Highlighted Statistic */}
        <div className="bg-yellow-400 text-black font-extrabold text-xl md:text-2xl rounded-lg px-4 py-4 inline-block sm:text-2xl transition-transform duration-300 hover:scale-105">
          30 Years of Experience
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
