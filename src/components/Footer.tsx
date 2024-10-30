import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AsphaltTech Solutions</h3>
            <p className="text-gray-400">Innovative adhesives and paints for the asphalt industry</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400">Home</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400">Products</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Asphalt Road</p>
            <p className="text-gray-400">Pavement City, PC 12345</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
            <p className="text-gray-400">Email: info@asphalttechsolutions.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 AsphaltTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;