import Image from "next/image";

const FoodSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center px-6 lg:px-20 py-10">
      
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-yellow-500 text-lg font-light">About Us</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          We Create the best <span className="text-yellow-300">foody product</span>
        </h1>
        <p className="text-gray-300">
        Explore new flavors discover exciting recipes and say goodbye to food waste
        Best Foody  we make cooking easy and enjoyable food 
        </p>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center">
            <span className="text-yellow-300 mr-3">✔</span> Revolutionize Your Cooking with the Best Food
          </li>
          <li className="flex items-center">
            <span className="text-yellow-300 mr-3">✔</span> Discover Delicious Recipes with Best Foody
          </li>
          <li className="flex items-center">
            <span className="text-yellow-300 mr-3">✔</span> Elevate Your Everyday Meals with Best Foody  Sauces
          </li>
        </ul>
        <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-2 gap-4">
        {/* Main Image */}
        <div className="col-span-2 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <Image
              src="/egg.png" // Replace with your main image path
              alt="Main Dish"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
            />
        </div>

        {/* Smaller Images */}
        <div className="transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
          
            <Image
              src="/sand.png" // Replace with the first small image path
              alt="Dish 1"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full"
            />
          
        </div>

        <div className="transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
         
            <Image
              src="/salan.png" // Replace with the second small image path
              alt="Dish 2"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full"
            />
       
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
