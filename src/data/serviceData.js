import { FaChartBar, FaDesktop, FaShoppingCart, FaTruck, FaUser, FaBalanceScale } from 'react-icons/fa';

export const servicesLink = [
    { name: "Accounting and Finance", href: "/services/Accounting" },
    { name: "Supply Chain Management", href: "/services/supply-chain" },
    { name: "Procurement Solutions", href: "/services/procurement" },
    { name: "IT and ERP Services", href: "/services/it-erp" },
    { name: "HR and Administrative Services", href: "/services/hr-admin" },
    { name: "Legal and Compliance Services", href: "/services/legal" },
  ]


export const services = [
    {
      title: "Accounting and Finance",
      description: "Comprehensive financial management solutions to optimize your business operations.",
      icon: <FaChartBar className="h-6 w-6 md:h-10 md:w-10 text-blue-500" />,
      href: "/services/accounting",
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions to streamline your logistics and operations.",
      icon: <FaTruck className="h-10 w-10 text-blue-500" />,
      href: "/services/supply-chain",
    },
    {
      title: "Procurement Solutions",
      description: "Strategic procurement services to optimize your purchasing processes and reduce costs.",
      icon: <FaShoppingCart className="h-10 w-10 text-blue-500" />,
      href: "/services/procurement",
    },
    {
      title: "IT and ERP Services",
      description: "Cutting-edge technology solutions to drive digital transformation in your business.",
      icon: <FaDesktop className="h-10 w-10 text-blue-500" />,
      href: "/services/it-erp",
    },
    {
      title: "HR and Administrative Services",
      description: "Comprehensive human resources solutions to manage and develop your workforce.",
      icon: <FaUser className="h-10 w-10 text-blue-500" />,
      href: "/services/hr-admin",
    },
    {
      title: "Legal and Compliance Services",
      description: "Expert legal guidance to ensure your business remains compliant with regulations.",
      icon: <FaBalanceScale className="h-10 w-10 text-blue-500" />,
      href: "/services/legal",
    },
  ];