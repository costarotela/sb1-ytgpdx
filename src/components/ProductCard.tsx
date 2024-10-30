import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="relative group" onClick={onClick}>
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      
      {/* Main card */}
      <div className="relative bg-white px-6 py-8 rounded-xl leading-none flex flex-col items-center space-y-4">
        {/* Glow effect for icon */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-yellow-400 to-amber-300 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative text-yellow-500 transform group-hover:scale-110 group-hover:text-yellow-600 transition-all duration-300">
            {product.icon}
          </div>
        </div>

        {/* Card content */}
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
          {product.description}
        </p>

        {/* Glowing button */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
          <button className="relative px-7 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg leading-none font-semibold text-gray-900 transition-all duration-200 hover:shadow-[0_0_2rem_-0.5rem_#fbbf24] group-hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;