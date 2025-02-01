"use client";
import React, { useState } from 'react';

const categories = ['All', 'Pizza', 'Burgers', 'Desserts', 'Drinks', 'Snacks'];

const products = [
  { id: 1, name: 'Pizza', category: 'Pizza', price: '$12', img: '/pizza.png', details: 'Delicious cheesy pizza with toppings of your choice.' },
  { id: 2, name: 'Burger', category: 'Burgers', price: '$8', img: '/burger.png', details: 'Juicy beef burger with crispy lettuce and tomato.' },
  { id: 3, name: 'Pasta', category: 'Pizza', price: '$10', img: '/pasta.png', details: 'Classic Italian pasta with rich marinara sauce.' },
  { id: 4, name: 'Sushi', category: 'Snacks', price: '$15', img: '/sushi.png', details: 'Fresh sushi rolls with tuna, salmon, and avocado.' },
  { id: 5, name: 'Ice Cream', category: 'Desserts', price: '$5', img: '/icecream.png', details: 'Sweet vanilla ice cream topped with chocolate syrup.' },
  { id: 6, name: 'Salad', category: 'Snacks', price: '$7', img: '/salad.jpeg', details: 'Healthy mix of fresh vegetables with vinaigrette.' },
  { id: 7, name: 'Steak', category: 'Pizza', price: '$20', img: '/pizza.jpeg', details: 'Tender grilled steak with a perfect sear.' },
  { id: 8, name: 'Tacos', category: 'Snacks', price: '$6', img: '/lemon.jpeg', details: 'Spicy tacos with beef, chicken, or vegetables.' },
  { id: 9, name: 'Sandwich', category: 'Burgers', price: '$7', img: '/sand.png', details: 'Grilled sandwich with ham, cheese, and pickles.' },
  { id: 10, name: 'Fried Chicken', category: 'Snacks', price: '$11', img: '/friedchicken.png', details: 'Crispy fried chicken with a savory coating.' },
  { id: 11, name: 'Smoothie', category: 'Drinks', price: '$5', img: '/drink.png', details: 'Fresh fruit smoothie with banana and berries.' },
  { id: 12, name: 'Pancakes', category: 'Desserts', price: '$9', img: '/p5.png', details: 'Fluffy pancakes with maple syrup and butter.' },
  { id: 13, name: 'Hot Dog', category: 'Snacks', price: '$4', img: '/hotdog.png', details: 'Classic chicken with mustard and ketchup.' },
  { id: 14, name: 'Fries', category: 'Snacks', price: '$3', img: '/donut.png', details: 'Golden crispy creamy with chocolate donut.' },
  { id: 15, name: 'Cupcake', category: 'Desserts', price: '$3', img: '/cupcake.jpeg', details: 'Sweet and fluffy vanilla cupcake with buttercream frosting.' },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="hidden md:block md:w-1/4 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`w-full text-left p-2 ${selectedCategory === category ? 'bg-blue-100' : 'hover:bg-gray-600'} rounded`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden bg-black text-white p-4">
        <select
          className="w-full p-2 bg-black text-white rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="w-full md:w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-48 sm:h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.details}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold">{product.price}</span>
                <button className="bg-black text-white py-2 px-4 rounded-lg">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
