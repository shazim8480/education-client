import React from "react";
import footerLogo from "../../../../images/footer-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="px-4 text-white bg-blueAlt font-body">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:pt-24 lg:pb-32 lg:flex-row lg:space-y-0">
        {/* logo side div */}
        <div className="lg:w-1/3">
          {/* img div */}
          <div>
            <Link to="/" className="flex justify-center lg:justify-start">
              <img
                src={footerLogo}
                className="self-start object-cover w-4/5 py-10 lg:py-0 h-3/5"
                alt="footerLogo"
              />
            </Link>
          </div>
          {/* address & info div */}
          <div className="w-full mb-12 lg:mb-0">
            <div className="flex items-start justify-start mt-10">
              <div className="ml-2 mr-4">
                <FontAwesomeIcon icon={faMapMarked} />
              </div>
              <div>
                <p className="text-base">
                  <span className="block">
                    1500 Treat Ave, Suite 200 +604-680-9785
                  </span>{" "}
                  San Francisco, CA 94110
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start mt-8">
              <div className="ml-2 mr-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p className="block text-base">vctung@outlook.com</p>
              </div>
            </div>
            <div className="flex items-start justify-start mt-8">
              <div className="ml-2 mr-4">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="block text-base"> 1-800-800-2299 (Support)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm lg:px-20 justify-items-center lg:justify-items-end lg:grid-cols-3 gap-x-16 gap-y-16">
          <div className="space-y-3">
            <h3 className="mb-10 text-xl font-bold tracking-wide lg:mt-3">
              Community
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/">Learners</Link>
              </li>
              <li>
                <Link to="/">Partners</Link>
              </li>
              <li>
                <Link to="/">Developers</Link>
              </li>
              <li>
                <Link to="/">Beta Testers</Link>
              </li>
              <li>
                <Link to="/">Translators</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Tech Blog</Link>
              </li>
              <li>
                <Link to="/">Teaching Center</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="mb-10 text-xl font-bold tracking-wide lg:mt-3">
              Information
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 lg:mr-5">
            <h3 className="mb-10 text-xl font-bold tracking-wide lg:mt-3">
              More
            </h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/">Press</Link>
              </li>
              <li>
                <Link to="/">Investors</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Accessibility</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Articles</Link>
              </li>
              <li>
                <Link to="/">Directory</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/">Affiliates</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
