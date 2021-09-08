import React from "react";
import updateImg from "../../../../images/cta.png";

const Subscribe = () => {
  return (
    <section className="container">
      <div className="flex flex-col-reverse mx-auto lg:flex-row">
        {/* image section */}
        <div className="lg:w-1/2 xl:w-3/5 bg-coolGray-100">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img
              src={updateImg}
              alt="cta"
              className="object-center w-1/2 rounded-lg h-1/2"
            />
          </div>
        </div>

        {/* get update */}
      </div>
    </section>
  );
};

export default Subscribe;
