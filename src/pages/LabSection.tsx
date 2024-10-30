import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const labSections = {
  'quality-control': {
    title: 'Quality Control Lab',
    mainImage: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3',
    description: 'Our state-of-the-art Quality Control Laboratory ensures that every product meets the highest standards of quality and performance. Using advanced testing equipment and rigorous protocols, we continuously monitor and verify product specifications throughout the manufacturing process.',
    features: [
      'Advanced rheological testing equipment',
      'Thermal analysis systems',
      'Adhesion testing facilities',
      'Environmental simulation chambers',
      'Durability testing equipment'
    ],
    capabilities: [
      'Real-time quality monitoring',
      'Batch testing and certification',
      'Performance validation',
      'Stability testing',
      'Compliance verification'
    ]
  },
  'research-development': {
    title: 'Research & Development',
    mainImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3',
    description: 'Our R&D facility is the heart of innovation at AsphaltTech Solutions. Here, our team of expert scientists and engineers work tirelessly to develop new formulations and improve existing products, ensuring we stay at the forefront of adhesive technology.',
    features: [
      'Advanced polymer research lab',
      'Material science facilities',
      'Prototype development center',
      'Environmental testing chamber',
      'Chemical analysis equipment'
    ],
    capabilities: [
      'New product development',
      'Formula optimization',
      'Custom solution design',
      'Environmental impact studies',
      'Performance enhancement research'
    ]
  },
  'production-facility': {
    title: 'Production Facility',
    mainImage: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3',
    description: 'Our modern production facility combines automation with precision to manufacture high-quality adhesives and paints. With strict quality control measures and efficient processes, we ensure consistent product quality and timely delivery.',
    features: [
      'Automated mixing systems',
      'Temperature-controlled reactors',
      'Advanced filtration systems',
      'Precision filling equipment',
      'Quality control checkpoints'
    ],
    capabilities: [
      'Large-scale production',
      'Custom batch processing',
      'Just-in-time manufacturing',
      'Environmental monitoring',
      'Quality assurance at every step'
    ]
  },
  'testing-laboratory': {
    title: 'Testing Laboratory',
    mainImage: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3',
    description: 'Our comprehensive testing laboratory is equipped with the latest technology to evaluate product performance under various conditions. We simulate real-world scenarios to ensure our products meet and exceed industry standards.',
    features: [
      'Weather resistance testing',
      'Mechanical stress analysis',
      'Chemical resistance testing',
      'Aging simulation equipment',
      'Performance measurement tools'
    ],
    capabilities: [
      'Accelerated weathering tests',
      'Strength and durability testing',
      'Chemical compatibility analysis',
      'Performance under extreme conditions',
      'Long-term stability assessment'
    ]
  },
  'quality-assurance': {
    title: 'Quality Assurance',
    mainImage: 'https://images.unsplash.com/photo-1581093067310-9a6e831886f4?ixlib=rb-4.0.3',
    description: 'Our Quality Assurance department ensures that every product leaving our facility meets our strict quality standards. Through comprehensive testing and documentation, we maintain consistent product excellence.',
    features: [
      'Documentation control system',
      'Process validation equipment',
      'Statistical analysis tools',
      'Compliance monitoring systems',
      'Calibration facilities'
    ],
    capabilities: [
      'Quality management system maintenance',
      'Process optimization',
      'Regulatory compliance verification',
      'Product certification',
      'Continuous improvement programs'
    ]
  }
};

const LabSection: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = sectionId ? labSections[sectionId as keyof typeof labSections] : null;

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-t-lg overflow-hidden">
        <img
          src={section.mainImage}
          alt={section.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 p-8">
            <Link to="/" className="flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">{section.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">{section.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-3">
                {section.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-yellow-500 mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h2>
              <ul className="space-y-3">
                {section.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-yellow-500 mr-3"></span>
                    <span className="text-gray-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabSection;