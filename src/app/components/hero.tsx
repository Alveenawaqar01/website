import Image from 'next/image';

const Heropage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row justify-center items-center ">
      
      {/* Left Section (Text Content) */}
      <div className="text-center md:text-left md:w-1/2 space-y-6 ml-4">
        <p className="text-2xl text-yellow-500  px-4 font-thin">It Quick and Amazing</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 ml-4">
          The Art of 
        </h1>

        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 ml-4">
         Speed
        </h2>

        {/* Gap between headings */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 ml-4">
         Food Quality
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-white mb-6 px-4 ml-3">
          A restaurant is a place where food and drinks are prepared and served to customers Restaurants can vary in their appearance offerings and service models Some things to know about restaurants
        </p>
        
        {/* Shop Now Button */}
        <button className="bg-yellow-300 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition duration-300 mt-8 md:mt-12 flex justify-center items-center ml-3">
          See Menu
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center shadow-lg">
        <Image
          src="/plate.png" // Replace with your image path
          alt="plate"
          width={800}  // Increased the width
          height={600} // Adjusted height to maintain aspect ratio
          className="object-cover w-full h-full" // Ensures it fills the container
        />
      </div>
    </div>
  );
};

export default Heropage;
