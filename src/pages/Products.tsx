import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet, Paintbrush, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'AsphaltSeal Pro', description: 'High-performance asphalt sealant', icon: <Shield size={48} /> },
  { id: 2, name: 'RoadPaint Plus', description: 'Durable road marking paint', icon: <Paintbrush size={48} /> },
  { id: 3, name: 'FlexBond Adhesive', description: 'Flexible asphalt bonding agent', icon: <Droplet size={48} /> },
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative mb-8">
        <img
          src="https://images.unsplash.com/photo-1573075175660-08fd45ac27a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Asphalt products"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-4xl font-bold text-white absolute bottom-4 left-4 shadow-text">Our Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;