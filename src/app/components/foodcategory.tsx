import React from "react";

const FoodItem = () => {
  return (
    <div className="p-8 bg-white min-h-[60vh] flex flex-col justify-center">
      {/* Main heading for the food items */}
      <h1 className="text-black text-center text-3xl mb-4 font-serif">Food Category</h1>
      <h2 className="text-green-800 text-center text-4xl sm:text-6xl mb-8 font-extrabold">Choose Food Items</h2>

      {/* Grid for the food items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Food Items with Hover Effect */}
        {[
          { src: "/plate2.png", alt: "Food 1" },
          { src: "/burger.jpeg", alt: "Food 2" },
          { src: "/plate1.png", alt: "Food 3" },
          { src: "/donut.png", alt: "Food 4" }
        ].map((food, index) => (
          <div
            key={index}
            className="relative text-center transition-transform duration-300 transform hover:scale-110 hover:shadow-xl"
          >
            <img
              src={food.src}
              alt={food.alt}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItem;
