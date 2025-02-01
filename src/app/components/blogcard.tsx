import Image from "next/image";

 function bloghome() {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-lg">
          <Image
            src="/card1.png"
            alt="Food Image"
            width={800}
            height={400}
            className="w-full rounded-t-lg"
          />
          <div className="p-6">
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <span className="bg-yellow-400 text-white px-3 py-1 rounded-full">
                14 Feb
              </span>
              <span>3 Comments</span>
              <span>Admin</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              Traditional Soft Pretzels with Sweet Cheese pizza
            </h2>
            <p  className="text-gray-600 mt-2">
              At vero eos et accusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren no sea takimata sanctus est Lorem ipsum
              dolor sit amet clita kasd gubergren no sea takimata sanctus est Lorem ipsum
              dolor sit amet
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-yellow-500 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Image
                  src="/egg1.png"
                  alt="Thumbnail"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-800">
                    Spicy italian pizza
                  </h4>
                  <p className="text-xs text-gray-500">June 22 2022</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="/egg2.png"
                  alt="Thumbnail"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-800">
                    Tikka veges pizza
                  </h4>
                  <p className="text-xs text-gray-500">June 22, 2022</p>
                  </div>
              </li>
            </ul>
          </div>

          {/* Filter by Menu */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Filter By Menu</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between text-gray-800">
                <span>Chicken Fry</span>
                <span className="text-gray-500">26</span>
              </li>
              <li className="flex justify-between text-gray-800"><span>Burger Food</span>
                <span className="text-gray-500">46</span>
              </li>
              <li className="flex justify-between text-gray-800">
                <span>Pizza</span>
                <span className="text-gray-500">16</span>
              </li>
              <li className="flex justify-between text-gray-800">
                <span>Fresh Fruits</span>
                <span className="text-gray-500">36</span>
              </li>
              <li className="flex justify-between text-gray-800">
                <span>Vegetables</span>
                <span className="text-gray-500">16</span>
              </li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Popular Tags</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                Food
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                Pizza
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                Burger
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                Fish
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default bloghome