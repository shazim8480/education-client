import React from "react";

const FactsCard = ({ facts }) => {
  const { image, totalNumbers, category } = facts;
  return (
    <div className="mb-20 md:grid md:justify-self-start md:mb-0 lg:mb-0">
      <div>
        <div className="flex items-start justify-center mb-5">
          <img
            className="object-cover object-top w-1/2 p-4 h-1/4"
            src={image}
            alt="funFacts"
          />
        </div>

        <div className="text-center">
          <h4 className="text-4xl font-heading text-secondary">
            {totalNumbers}
          </h4>
          <p className="mt-4 text-xl font-bold font-body text-teal">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FactsCard;
