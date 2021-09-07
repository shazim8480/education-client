import React from "react";
import heroBg from "../../../../images/hero-header.png";

const Hero = () => {
  return (
    <section className="bg-hero relative">
      <div className="container">
        <div className="mx-auto flex pt-12 pb-12 md:pb-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h4 className="title-font text-2xl mb-6 font-extrabold text-secondary font-body">
              Become Master
            </h4>
            <h1 className="mb-12 font-heading text-4xl md:text-6xl leading-snug text-secondary">
              Learn New Skills Online Find Best Courses
            </h1>

            <div className="flex justify-center">
              <button className="inline-flex items-center rounded font-body text-secondary bg-primary border-0 py-2 px-5 focus:outline-none hover:bg-yellow-300 text-md">
                Get a Quote
              </button>

              <button className="ml-4 inline-flex items-center rounded font-body text-secondary bg-hero border-2 border-secondary py-2 px-5 hover:bg-secondary hover:text-blue-50 text-md">
                Read More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroBg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
