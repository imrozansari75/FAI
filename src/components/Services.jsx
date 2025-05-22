import React from 'react';
import { FaChartBar, FaDesktop, FaShoppingCart, FaTruck, FaUser, FaBalanceScale, FaChevronRight } from 'react-icons/fa';
import { services } from '../data/serviceData';

const Services = () => {
  
  // const services = [
  //   {
  //     title: "Accounting and Finance",
  //     description: "Comprehensive financial management solutions to optimize your business operations.",
  //     icon: <FaChartBar className="h-10 w-10 text-blue-500" />,
  //     href: "/services/accounting",
  //   },
  //   {
  //     title: "Supply Chain Management",
  //     description: "End-to-end supply chain solutions to streamline your logistics and operations.",
  //     icon: <FaTruck className="h-10 w-10 text-blue-500" />,
  //     href: "/services/supply-chain",
  //   },
  //   {
  //     title: "Procurement Solutions",
  //     description: "Strategic procurement services to optimize your purchasing processes and reduce costs.",
  //     icon: <FaShoppingCart className="h-10 w-10 text-blue-500" />,
  //     href: "/services/procurement",
  //   },
  //   {
  //     title: "IT and ERP Services",
  //     description: "Cutting-edge technology solutions to drive digital transformation in your business.",
  //     icon: <FaDesktop className="h-10 w-10 text-blue-500" />,
  //     href: "/services/it-erp",
  //   },
  //   {
  //     title: "HR and Administrative Services",
  //     description: "Comprehensive human resources solutions to manage and develop your workforce.",
  //     icon: <FaUser className="h-10 w-10 text-blue-500" />,
  //     href: "/services/hr-admin",
  //   },
  //   {
  //     title: "Legal and Compliance Services",
  //     description: "Expert legal guidance to ensure your business remains compliant with regulations.",
  //     icon: <FaBalanceScale className="h-10 w-10 text-blue-500" />,
  //     href: "/services/legal",
  //   },
  // ];

  return (
    <section id="services" className="py-16 md:py-24 md:px-4 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="bg-blue inline text-white text-center px-4 py-1 rounded-full text-sm mb-4">Our Services</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4">Comprehensive Corporate Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of corporate services to help your business operate efficiently and
            effectively.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray transition-all hover:shadow-md"
            >
              <div>
                <div className="mb-4 text-blue">{service.icon}</div>
                <h2 className='font-bold text-xl md:text-2xl'>{service.title}</h2>
                <p>{service.description ? service.description.length > 20 ? service.description.substring(0, 100) + '...' : service.description : ''}</p>
              </div>
              <div className='flex'>
                <a href={service.href} className="flex items-center mt-2 gap-2 text-blue hover:text-blue group">
                  Learn More <FaChevronRight className='h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
