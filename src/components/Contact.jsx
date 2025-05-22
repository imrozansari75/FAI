import {
  Mail,
  Phone,
  MapPin,
  Send,
  // AlertCircle
} from 'lucide-react';

import BlackRose from '../assets/image/Black Rose.png';
import Atlas from '../assets/image/Atlas Protective Products.jpeg';
import TozaiSafety from '../assets/image/Tozai Safety.png';

const Contact = () => {

  const images = [
    {
      id: 1,
      src: BlackRose,
      alt: 'Black Rose',
      company: 'Black Rose',
      width: 300,
      height: 100
    },
    {
      id: 2,
      src: Atlas,
      alt: 'Atlas Protective Products',
      company: 'Atlas Protective Products',
      width: 200,
      height: 200
    },
    {
      id: 3,
      src: TozaiSafety,
      alt: 'Tozai Saftey',
      company: 'Tozai Saftey',
      width: 1200,
      height: 400
    }
  ];


  return (
    <div className="w-full" >
      {/* Hero Section */}
     <section id="cta" className="py-16 md:py-24 md:px-4">
       <div className="text-center max-w-3xl mx-auto">
          <h1 className="bg-blue inline text-white text-center px-4 py-1 rounded-full text-sm mb-4">Contact Us</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold mt-3 mb-4">Comprehensive Corporate Solutions</h2>
          <p className="text-base md:text-lg text-black">
            Get in touch with our team to discuss how we can help your business succeed.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-0 px-4" id='cta'>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-blue mb-2 md:mb-6">Get in Touch</h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Have questions about our services or want to discuss how we can help your business?
                Our team is here to assist you. Reach out to us using the contact details below or fill out the form.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-corporate-100 px-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-blue">Office Location</h3>
                    <p className="text-gray-600">
                      Corporate Office: 144A, Mittal Tower, Nariman Point, Mumbai 400021 <br />
                      Registered Address: 430-B, Kewal Industrial Estate, Senapati Bapat Marg, Mumbai 400013
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-corporate-100 px-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-blue">Email Address</h3>
                    <p className="text-gray-600">
                      fukui@texbrex.com
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-corporate-100 px-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-blue">Phone Number</h3>
                    <p className="text-gray-600">
                      Main: +91 22 43337200
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-corporate-700">Business Hours</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Monday - Friday:</div>
                    <div className="text-gray-800 font-medium">9:00 AM - 5:30 PM</div>
                    <div className="text-gray-600">Saturday:</div>
                    <div className="text-gray-800 font-medium">10:00 AM - 2:00 PM</div>
                    <div className="text-gray-600">Sunday:</div>
                    <div className="text-gray-800 font-medium">Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue mb-6">Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="flex submit-btn">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 max-w-4xl mx-auto w-full flex justify-center">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="bg-blue inline text-white text-center px-4 py-1 rounded-full text-sm mb-4">Our Clients</h1>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              We're proud to work with leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-items-center">
            {/* Client Logos - Using placeholder logos */}
            {images?.map((image) => (
              <div key={image.id}>
                <div className="h-16 w-32 text-center bg-gray-200 rounded flex flex-col items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;