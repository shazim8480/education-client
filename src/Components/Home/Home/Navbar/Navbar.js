import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo-n.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <section className="sticky z-10 drop-shadow-lg">
      <Popover className="relative bg-white">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Education</span>
                <img className="w-auto h-8 sm:h-10" src={logo} alt="" />
              </Link>
            </div>
            {/* responsive mobile menu */}
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex ">
              <div className="items-center space-x-10 md:flex md:justify-end ">
                <Link
                  to="/home"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  Admin
                </Link>
                <Link
                  to="/pricing"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  Pricing
                </Link>
                <Link
                  to="/courseCategory"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  Categories
                </Link>
                <Link
                  to="/login"
                  className="text-base whitespace-nowrap font-body text-secondary hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-4 py-2 ml-4 text-base font-medium text-gray-700 border border-transparent rounded-md shadow-sm whitespace-nowrap font-body bg-primary hover:bg-yellow-300"
                >
                  Sign up
                </Link>
              </div>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="w-auto h-8" src={logo} alt="logo" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-1 gap-y-4">
                  <Link
                    to="/home"
                    className="text-base font-body text-secondary hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    to="/admin/dashboard"
                    className="text-base font-body text-secondary hover:text-gray-700"
                  >
                    Admin
                  </Link>

                  <Link
                    to="/pricing"
                    className="text-base font-body text-secondary hover:text-gray-700"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/courseCategory"
                    className="text-base font-body text-secondary hover:text-gray-700"
                  >
                    Categories
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-gray-700 border border-transparent rounded-md shadow-sm font-body bg-primary hover:bg-yellow-300"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 font-medium text-center text-secondary font-body">
                    Existing customer?{" "}
                    <Link
                      to="/login"
                      className="text-primary font-body hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </section>
  );
};

export default Navbar;
