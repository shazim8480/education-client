import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const navInfo = [
  {
    icon: faMapMarked,
    description: "1600 Amphitheatre Parkway, CA 94043",
  },
  {
    icon: faEnvelope,
    description: "example@outlook.com",
  },
];

const brandIcons = [
  { brand: faFacebookF, href: "#" },
  { brand: faPinterest, href: "#" },
  { brand: faTwitter, href: "#" },
  { brand: faInstagram, href: "#" },
];

const TopNav = () => {
  return (
    <section className="hidden md:block lg:block">
      <div className="container py-4 bg-primary">
        <div className="flex items-center justify-between text-sm text-secondary font-body">
          {/* icons and descriptions part */}
          <div className="flex">
            {navInfo.map((info) => {
              return (
                <div className="flex justify-start mr-8 ">
                  <div className="pr-4">
                    <FontAwesomeIcon icon={info.icon} key={info.icon} />
                  </div>
                  <h5>{info.description}</h5>
                </div>
              );
            })}
          </div>
          {/* brans icons part */}
          <div className="flex justify-end">
            {brandIcons.map((icons) => {
              return (
                <div className="flex">
                  <div className="pl-2">
                    <FontAwesomeIcon icon={icons.brand} key={icons.brand} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
