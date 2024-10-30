import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-10">
      <div className="bg-gray-800 py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>Dir: rep. de Siria | S3004GLE - Santa Fe - Argentina</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span>Tel: +54 (0342) 652 6440</span>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <Mail size={16} className="mr-1" />
            <span>email: info@lainteq.com.ar</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">LAINTEQ - Soluciones tecnológicas</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-yellow-400">Inicio</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Productos</Link></li>
            <li><Link to="/empresa" className="hover:text-yellow-400">Empresa</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contacto</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="bg-gray-800 text-white py-4 px-4 md:hidden">
          <ul className="space-y-2">
            <li><Link to="/" className="block py-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" className="block py-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Products</Link></li>
            <li><Link to="/empresa" className="block py-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Empresa</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;