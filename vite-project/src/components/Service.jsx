import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg  font-roboto shadow-md p-6  text-orange-600">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
      icon: <i className="service-1">🔍</i>, // Example icon
    },
    {
      title: 'Digital Marketing',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
      icon: <i className="service-1">📈</i>, // Example icon
    },
    {
      title: 'Market Research',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
      icon: <i className="service-1">🔬</i>, // Example icon
    },
    {
        title: 'Marketing & Reporting',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
        icon: <i className="service-1">🔬</i>, // Example icon
    }
  ];

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
