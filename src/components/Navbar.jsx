import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/FATIPL Logo - Visheshh Jatiaa.png';
import { ChevronDown } from 'lucide-react'
import { servicesLink } from '../data/serviceData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const location = useLocation()


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <nav className={
      "fixed md:px-16 top-0 left-0 w-full z-50 transition-all duration-300 " +
      (isScrolled ? "bg-white shadow-md py-2 md:px-[4.4rem]" : "bg-white/95 py-4")
    }>
      <div className="flex flex-wrap justify-between items-center mx-auto px-4 md:p-4">
        <HashLink smooth href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-[#0300b9] text-3xl font-bold">
            <img src={Logo} className="h-4 md:h-4" alt="Logo" />
          </span>
        </HashLink>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="md:w-5 md:h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop & Mobile Nav Links */}
        <div className={`${mobileMenuOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1 items-center justify-between font-medium`}>
          <ul className="flex flex-col px-3 py-4 md:p-0 mt-1 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <HashLink
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                smooth
                to="/#hero"
                className="block py-2 px-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0"
              >
                Home
              </HashLink>

            </li>
            <li>
              <HashLink onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                smooth to="/#about" className="block py-2 px-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0">About</HashLink>
            </li>
            <li>
              {/* <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="hidden md:flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue md:p-0"
              >
                Services
                <svg
                  className="hidden md:block w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> */}



              <div className="relative inline-block text-left">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 p-0 flex items-center`}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {servicesOpen && (
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      {servicesLink.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>




              <HashLink onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                smooth to="/#services" className="block md:hidden py-2 px-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0">Services</HashLink>
            </li>
            <li>
              <HashLink onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                smooth to="/#career" className="block py-2 px-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0">Career</HashLink>
            </li>
            <li>
              <HashLink onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                smooth to="/#cta" className="block py-2 px-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0">Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Services Dropdown Menu */}
      {/* {servicesOpen && (
        <div
          className={`hidden md:block mt-1 border-gray-200 shadow-xs bg-white md:bg-white border-y dark:bg-gray-800 dark:border-gray-600
  transition-all duration-300 ease-in-out transform
  ${servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <HashLink onClick={() => setServicesOpen(!servicesOpen)}
                  smooth to="/#accounting" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Accounting and Finance</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </HashLink>
              </li>
              <li>
                <a href="/#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Supply Chain Management</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Procurement Solutions</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">IT and ERP Services</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">HR and Administrative Services</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Legal and Compliance Services</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
