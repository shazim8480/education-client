import React from "react";
import updateImg from "../../../../images/cta.png";

const Subscribe = () => {
  return (
    <section className="container my-20">
      <div className="mx-auto lg:flex lg:justify-start lg:items-center">
        {/* image section */}
        <div className="">
          <div className="flex items-center p-4 justify-evenly xl:p-6 lg:p-6">
            <img
              src={updateImg}
              alt="cta"
              className="object-center w-1/2 rounded-lg h-1/2"
            />
          </div>
        </div>
        {/* get update */}
        <div className="mt-5 lg:w-1/2 xl:w-3/5 lg:mt-0 ">
          {/* headers section */}
          <h4 className="mb-2 text-xl font-bold font-body text-primary">
            Subscribe Now
          </h4>
          <h2 className="mb-6 text-3xl xl:mb-12 lg:text-4xl text-secondary font-heading">
            {" "}
            <span className="block">Get every single</span> update you will get
          </h2>
          {/* forms section */}

          <div className="flex justify-start">
            {/* form field */}
            <div className="relative flex w-3/5">
              <span className="inline-flex items-center px-3 text-sm bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md text-secondary">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <input
                type="text"
                id="email-with-icon"
                className="flex-1 w-full px-4 py-2 text-base placeholder-blue-900 bg-white border border-gray-300 shadow-sm appearance-none text-secondary focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                name="email"
                placeholder="Your email"
              />
            </div>
            {/* form button */}
            <button className="inline-flex items-center justify-center px-4 py-2 -ml-1 text-base text-gray-500 border border-transparent shadow-sm whitespace-nowrap font-body bg-primary hover:bg-yellow-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
