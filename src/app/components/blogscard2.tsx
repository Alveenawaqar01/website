import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function BlogCard2() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-lg">
          <img
            src="/egg3.png"
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
              The Ultimate Hangover Burger: Egg in a Hole Burger
            </h2>
            <p className="text-gray-600 mt-2">
              At vero eos et accusam et justo duo dolores et ea rebum Stet
              clita kasd gubergren no sea takimata sanctus est Lorem ipsum
              dolor sit amet
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-yellow-500 font-semibold hover:underline"
            >
              Read More 
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Follow Us */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaFacebook className="text-gray-800 text-2xl" />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaTwitter className="text-gray-800 text-2xl" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaInstagram className="text-gray-800 text-2xl" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaYoutube className="text-gray-800 text-2xl" />
              </a>
            </div>
          </div>
          {/* icon */}
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
              <li className="flex justify-between text-gray-900">
                <span>Pizza</span>
                <span className="text-gray-500">16</span>
              </li>
              <li className="flex justify-between text-gray-900">
                <span>Fresh Fruits</span>
                <span className="text-gray-500">36</span>
              </li>
              <li className="flex justify-between text-gray-900">
                <span>Vegetables</span>
                <span className="text-gray-500">16</span>
              </li>
              <li className="flex justify-between text-gray-900">
                <span>Shawarma</span>
                <span className="text-gray-500">10</span>
              </li>
              <li className="flex justify-between text-gray-900">
                <span>Chicken rice</span>
                <span className="text-gray-500">8</span>
              </li>
              <li className="flex justify-between text-gray-900">
                <span>Beef burger</span>
                <span className="text-gray-500"> 6</span>
              </li>
              <li className="flex justify-between text-gray-890">
                <span>Vegetables Rice </span>
                <span className="text-gray-500">2</span>
              </li>
              <li className="flex justify-between text-gray-900">
                <span>Fries </span>
                <span className="text-gray-500">4</span>
              </li><li className="flex justify-between text-gray-900">
                <span>chicken Tikka</span>
                <span className="text-gray-500">9</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard2;
