import React from 'react';

const Company: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6">Nuestra Empresa</h1>
      <div className="space-y-6">
        <section className="flex items-center space-x-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3">Quiénes Somos</h2>
            <p className="text-gray-700">
              AsphaltTech Solutions es una empresa líder en la industria de adhesivos y pinturas para asfalto. 
              Con más de 20 años de experiencia, nos hemos dedicado a desarrollar soluciones innovadoras y de alta calidad 
              para satisfacer las necesidades de nuestros clientes en el sector de la construcción y mantenimiento vial.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Asphalt road construction" 
            className="w-1/3 rounded-lg shadow-md"
          />
        </section>
        <section className="flex items-center space-x-6">
          <img 
            src="https://images.unsplash.com/photo-1605463236126-c6c3d8a6e2f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Road marking" 
            className="w-1/3 rounded-lg shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
            <p className="text-gray-700">
              Nuestra misión es proporcionar productos de vanguardia que mejoren la durabilidad, seguridad y eficiencia 
              de las infraestructuras viales. Nos esforzamos por ser líderes en innovación, calidad y servicio al cliente 
              en la industria de adhesivos y pinturas para asfalto.
            </p>
          </div>
        </section>
        <section className="flex items-center space-x-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3">Compromiso con la Calidad</h2>
            <p className="text-gray-700">
              En AsphaltTech Solutions, la calidad es nuestra prioridad. Todos nuestros productos pasan por rigurosos 
              controles de calidad y cumplen con los estándares más exigentes de la industria. Nuestro equipo de 
              investigación y desarrollo trabaja constantemente para mejorar nuestras fórmulas y crear nuevas soluciones 
              que respondan a las necesidades cambiantes del mercado.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Quality control" 
            className="w-1/3 rounded-lg shadow-md"
          />
        </section>
      </div>
    </div>
  );
};

export default Company;