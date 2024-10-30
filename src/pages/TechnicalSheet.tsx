import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AsphaltSeal Pro',
    technicalDetails: {
      composition: 'Polímeros acrílicos, resinas y aditivos especiales',
      density: '1.2 g/cm³',
      dryingTime: '2-4 horas (dependiendo de las condiciones climáticas)',
      coverage: '1-2 m²/L (dependiendo de la porosidad de la superficie)',
      application: 'Brocha, rodillo o equipo de pulverización sin aire',
      dilution: 'No se recomienda. Listo para usar.',
      cleaning: 'Agua y jabón inmediatamente después de su uso',
      storage: 'Mantener en un lugar fresco y seco, lejos de la luz solar directa',
    },
  },
  {
    id: 2,
    name: 'RoadPaint Plus',
    technicalDetails: {
      composition: 'Resinas acrílicas, pigmentos de alta calidad y aditivos especiales',
      density: '1.5 g/cm³',
      dryingTime: '30 minutos al tacto, 2 horas para tráfico ligero',
      coverage: '2-3 m²/L (dependiendo del espesor de la aplicación)',
      application: 'Máquina de pintura vial o brocha para áreas pequeñas',
      dilution: 'Hasta un 5% con agua si es necesario',
      cleaning: 'Agua y jabón inmediatamente después de su uso',
      storage: 'Mantener en un lugar fresco y seco, protegido de heladas',
    },
  },
  {
    id: 3,
    name: 'FlexBond Adhesive',
    technicalDetails: {
      composition: 'Polímeros elastoméricos y resinas sintéticas',
      density: '1.1 g/cm³',
      curingTime: '24-48 horas para curado completo',
      coverage: '0.5-1 m²/L (dependiendo de la aplicación)',
      application: 'Llana dentada o equipo de pulverización especializado',
      dilution: 'No diluir. Usar tal como se suministra.',
      cleaning: 'Solventes especiales antes del curado, medios mecánicos después del curado',
      storage: 'Almacenar en un lugar fresco y seco. Vida útil de 12 meses en envase original cerrado',
    },
  },
];

const TechnicalSheet: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Ficha técnica no encontrada</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <Link to={`/product/${id}`} className="flex items-center text-yellow-500 hover:text-yellow-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Volver al Producto
      </Link>
      <h1 className="text-3xl font-bold mb-6">Ficha Técnica: {product.name}</h1>
      <div className="space-y-4">
        {Object.entries(product.technicalDetails).map(([key, value]) => (
          <div key={key} className="border-b border-gray-200 pb-2">
            <strong className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSheet;