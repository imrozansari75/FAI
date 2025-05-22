import React from "react";

const Hero = () => {
  return (
    <section id="hero" className=" py-16 md:mt-16 md:py-[8rem] md:px-4">
      {/* Title */}
      <div className="mt-5 text-center mx-auto">
        <h1 className="block font-bold text-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          EMPOWERING YOU WITH COMPLETE BUSINESS SUPPORT SOLUTIONS
        </h1>
      </div>
      {/* End Title */}

      <div className="mt-5 max-w-4xl text-center mx-auto">
        <p className="text-base md:text-2xl text-black">At FAI Corporate Services Private Limited, we offer comprehensive business support services which enables you to focus entirely on your core business activities, while you let us manage the other complexities of running a business in India.</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-7">
        <div className="mt-8 gap-3 flex justify-center">
          <button className="bg-transparent hover:bg-blue text-blue duration-200 hover:text-white font-semibold py-2 px-4 border border-blue hover:border-transparent rounded">
            Explore Services
          </button>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <button className="bg-blue hover:bg-transparent duration-200 hover:text-blue font-semibold text-white py-2 px-4 border hover:border-blue border-transparent rounded">
            Get in Touch
          </button>
        </div>
      </div>
      {/* End Buttons */}
    </section>
  );
};

export default Hero;
