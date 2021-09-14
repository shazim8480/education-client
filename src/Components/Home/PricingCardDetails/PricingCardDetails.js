import React from "react";
import { Link } from "react-router-dom";

const PricingCardDetails = ({ pricing }) => {
  const { category, headline, price, services } = pricing;
  return (
    <div className="my-8">
      <div className="mb-4 overflow-hidden rounded-lg shadow-lg font-body">
        <div className="relative px-8 bg-white">
          <div className="pt-6">
            <div className="flex justify-center">
              <div className="absolute -top-1">
                <span
                  className={`inline-flex items-center px-5 py-2 text-sm leading-5 tracking-wide text-white uppercase rounded-sm 
                  ${category === "Starter" ? "bg-secondary" : "bg-red-500"}
                  ${category === "Premium" && "bg-teal"}`}
                >
                  {category}
                </span>
              </div>
            </div>
            <div className="flex justify-start mt-20 text-5xl font-semibold leading-none text-secondary">
              <span className="pr-2 text-3xl font-light font-heading">$</span>{" "}
              {price}
            </div>
            <div className="pt-8 text-left text-gray-400">
              <h5 className="mb-4">{headline}</h5>
              <hr />
            </div>
          </div>
          <div className="pt-6 pb-8 bg-white lg:pt-3">
            <ul>
              {services.map((service, idx) => {
                return (
                  <li className="flex items-start mt-4">
                    <div key={idx} className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-teal"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      {service}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10 rounded-md shadow">
              <Link
                to="/checkout"
                className="flex items-center justify-center px-5 py-2 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-secondary bg-primary hover:bg-secondary hover:text-white focus:outline-none focus:shadow-outline"
              >
                Purchase Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardDetails;
