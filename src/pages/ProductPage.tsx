import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Droplet, Paintbrush, Shield, ArrowLeft, FileText, DollarSign } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const products = [
  {
    id: 1,
    category: 'pinturas',
    name: 'AsphaltSeal Pro',
    description: 'High-performance asphalt sealant',
    icon: <Shield size={64} />,
    features: [
      'Superior crack-filling properties',
      'UV and weather-resistant',
      'Fast-drying formula',
      'Extends pavement life',
    ],
    applications: [
      'Parking lots',
      'Driveways',
      'Airport runways',
      'Highway maintenance',
    ],
  },
  {
    id: 2,
    category: 'pinturas',
    name: 'RoadPaint Plus',
    description: 'Durable road marking paint',
    icon: <Paintbrush size={64} />,
    features: [
      'High visibility in all weather conditions',
      'Quick-drying for minimal traffic disruption',
      'Excellent adhesion to asphalt and concrete',
      'Long-lasting color retention',
    ],
    applications: [
      'Highway lane markings',
      'Pedestrian crossings',
      'Parking lot striping',
      'Airport runway markings',
    ],
  },
  {
    id: 3,
    category: 'adhesivos',
    name: 'FlexBond Adhesive',
    description: 'Flexible asphalt bonding agent',
    icon: <Droplet size={64} />,
    features: [
      'High flexibility for crack bridging',
      'Excellent adhesion to various substrates',
      'Resistant to chemicals and oils',
      'Suitable for both hot and cold applications',
    ],
    applications: [
      'Bridge deck waterproofing',
      'Pothole repairs',
      'Asphalt overlay bonding',
      'Concrete-to-asphalt transitions',
    ],
  },
];

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <Link to="/products" className="flex items-center text-yellow-500 hover:text-yellow-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </Link>
      <div className="flex items-center mb-6">
        <div className="text-yellow-500 mr-4">{product.icon}</div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600">{product.description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.applications.map((application, index) => (
              <li key={index}>{application}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex space-x-4">
        <Link 
          to={`/ficha-tecnica/${id}`} 
          className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors"
        >
          <FileText size={20} className="mr-2" />
          Ver Ficha Técnica
        </Link>
        <button 
          onClick={() => setShowQuoteForm(true)}
          className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600 transition-colors"
        >
          <DollarSign size={20} className="mr-2" />
          Request a Quote
        </button>
      </div>
      {showQuoteForm && (
        <QuoteForm productName={product.name} onClose={() => setShowQuoteForm(false)} />
      )}
    </div>
  );
};

export default ProductPage;