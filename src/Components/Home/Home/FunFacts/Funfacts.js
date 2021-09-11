import React from "react";
import FactsCard from "../FactsCard/FactsCard";
import publishedImg from "../../../../images/published.png";
import instructorsImg from "../../../../images/instructors.png";
import learnersImg from "../../../../images/learners.png";
import awardsImg from "../../../../images/awards.png";

const funFactsData = [
  {
    image: publishedImg,
    totalNumbers: "768",
    category: "Courses Published",
  },
  {
    image: instructorsImg,
    totalNumbers: "120",
    category: "Expert Instructors",
  },
  {
    image: learnersImg,
    totalNumbers: "8300",
    category: "Happy Learners",
  },
  {
    image: awardsImg,
    totalNumbers: "32",
    category: "Awards Achieved",
  },
];

const Funfacts = () => {
  return (
    <section className="my-20 bg-fixed bg-center bg-no-repeat bg-cover md:my-24 lg:my-24 bg-fun-facts">
      <div className="container py-24 md:py-32 lg:py-32">
        {/* responsive grid */}
        <div className="grid grid-cols-1 justify-items-center md:gap-8 lg:gap-8 md:grid-cols-4 lg:grid-cols-4">
          {funFactsData.map((facts) => (
            <FactsCard facts={facts} key={facts.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funfacts;
