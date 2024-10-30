import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet, Paintbrush, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import ProductCard from '../components/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3',
    title: 'Quality Control Lab',
    id: 'quality-control'
  },
  {
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3',
    title: 'Research & Development',
    id: 'research-development'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3',
    title: 'Production Facility',
    id: 'production-facility'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3',
    title: 'Testing Laboratory',
    id: 'testing-laboratory'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093067310-9a6e831886f4?ixlib=rb-4.0.3',
    title: 'Quality Assurance',
    id: 'quality-assurance'
  }
];

const products = [
  { id: 1, name: 'AsphaltSeal Pro', description: 'High-performance asphalt sealant', icon: <Shield size={48} /> },
  { id: 2, name: 'RoadPaint Plus', description: 'Durable road marking paint', icon: <Paintbrush size={48} /> },
  { id: 3, name: 'FlexBond Adhesive', description: 'Flexible asphalt bonding agent', icon: <Droplet size={48} /> },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-pattern"></div>
          <div className="absolute inset-0 bg-gradient-circles"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Laboratorio Industrial
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-delay">
            Tecnologia que Une, Calidad que Perdura
          </p>

          {/* 3D Carousel */}
          <div className="max-w-5xl mx-auto mb-12">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1.5}
              breakpoints={{
                640: {
                  slidesPerView: 2.5
                }
              }}
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
              }}
              speed={1500}
              pagination={{
                clickable: true
              }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="mySwiper !pb-12"
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="relative group px-4 cursor-pointer"
                    onClick={() => navigate(`/lab-section/${image.id}`)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-[200px] sm:h-[300px] object-cover rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold text-center px-4">{image.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => navigate('/products')}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#fbbf24] animate-fade-in-delay-2"
          >
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="animate-fade-in-up">
                <ProductCard
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;