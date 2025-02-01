import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */} 
      {/* <header className="bg-white text-black text-center py-16">
        <h1 className="text-4xl font-extrabold text-black leading-tight mb-4">
          Welcome to Elite Food
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Experience the ultimate taste and freshness of food Our mission is to serve
          delicious high quality meals that satisfy your cravings From our farm fresh
          ingredients to our expert chefs we are committed to providing an unforgettable
          dining experience
        </p>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Food Item */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src="/chicken.jpeg"
              alt="Delicious Chicken"
              className="w-full h-96 object-cover transform transition-transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Delicious Chicken</h2>
              <p className="mt-4 text-gray-600">
                Enjoy our freshly prepared chicken with a perfect blend of spices and
                seasonings that will tantalize your taste buds
              </p>
            </div>
          </div>

          {/* Second Food Item */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src="/burger.jpeg"
              alt="Juicy Burger"
              className="w-full h-96 object-cover transform transition-transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Juicy Burgers</h2>
              <p className="mt-4 text-gray-600">
                Savor the taste of our juicy burgers crafted with the finest ingredients
                and loaded with flavors that you will love
              </p>
            </div>
          </div>

          {/* Third Food Item */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src="/pizza.jpeg"
              alt="Mouthwatering Pizza"
              className="w-full h-96 object-cover transform transition-transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Mouthwatering Pizza</h2>
              <p className="mt-4 text-gray-600">
                A perfect pizza made with fresh dough cheese and a variety of toppings
                to satisfy every pizza lover
              </p>
            </div>
          </div>
        </section>
      </main>

          
    </div>
  );
};

export default About;
