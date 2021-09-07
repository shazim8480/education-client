import React from "react";
import upcomingImg from "../../../../images/funfacts.png";

const UpcomingCard = () => {
  return (
    <section className="md:container md:relative">
      <div className="md:absolute md:-bottom-20 md:left-28 bg-secondary rounded-lg py-2 md:px-8 px-2 text-white font-heading">
        <div className="md:flex md:items-center md:justify-between">
          {/* left div */}
          {/* <div className="md:w-1/2"> */}
          <div className="md:flex md:justify-between md:items-center">
            <img
              className="ml-40 md:ml-0 object-cover w-40 h-40"
              src={upcomingImg}
              alt="Upcoming"
            />
            <h3 className="text-3xl md:text-4xl my-3 md:my-0 md:ml-8 md:text-left text-center leading-snug">
              Upcoming Our{" "}
              <span className="text-primary">
                Basic <br /> in Python{" "}
              </span>
              Course!
            </h3>
          </div>
          {/* </div> */}
          {/* right div */}
          <div className="text-center md:text-right">
            <h4 className="text-4xl md:text-6xl md:pl-24">11 : 02 : 45 : 21</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCard;
