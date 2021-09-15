import React from "react";
import PricingCardDetails from "../PricingCardDetails/PricingCardDetails";

const pricingData = [
  {
    category: "Starter",
    price: "19.00",
    headline: "A Private Limited is the Most Popular",
    services: [
      "Access to 25 courses",
      "Course Discussions",
      "Offline Viewing",
      "Certificate After Completion",
      "Private Sessions",
    ],
  },
  {
    category: "Premium",
    price: "29.00",
    headline: "A Private Limited is the Most Popular",
    services: [
      "Access to 25 courses",
      "Course Discussions",
      "Offline Viewing",
      "Certificate After Completion",
      "Private Sessions",
    ],
  },
  {
    category: "Enterprise",
    price: "49.00",
    headline: "A Private Limited is the Most Popular",
    services: [
      "Access to 25 courses",
      "Course Discussions",
      "Offline Viewing",
      "Certificate After Completion",
      "Private Sessions",
    ],
  },
];

const PricingCard = () => {
  return (
    <div className="container py-16 mb-20 bg-hero">
      {/* details header div */}
      <div className="lg:flex lg:justify-between">
        {/* Header info */}
        <div className="lg:w-3/5 header-info">
          <h5 className="text-sm font-bold text-center lg:text-left lg:py-2 font-body text-primary">
            Our Plans
          </h5>
          <h3 className="mt-3 mb-16 text-4xl text-center lg:mb-12 lg:text-left text-secondary font-heading lg:text-5xl">
            Get in Reasonable Price
          </h3>
        </div>
        {/* toggle switch */}
        <div className="pb-12 lg:pb-0">
          <div className="ml-2 font-semibold lg:ml-0 lg:mt-3 font-body text-md">
            <div className="flex items-center justify-start">
              <input
                className="hidden"
                type="checkbox"
                id="toggle_1"
                value="1"
              />
              <label
                className="relative flex items-center justify-start w-10 h-6 p-1 border border-gray-500 rounded-full cursor-pointer left-32 lg:left-0"
                htmlFor="toggle_1"
              >
                <span className="w-4 h-4 rounded-full bg-secondary"></span>
              </label>
              <span className="relative w-8 ml-3 mr-3 left-32 lg:left-0">
                Monthly
              </span>
              <span className="absolute w-8 ml-12 lg:ml-0 lg:right-52">
                Annually
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* price cards div */}
      <div className="grid grid-rows-1 gap-10 lg:grid-cols-3 justify-items-center place-items-center">
        {pricingData.map((pricing) => (
          <PricingCardDetails pricing={pricing} key={pricing.category} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
