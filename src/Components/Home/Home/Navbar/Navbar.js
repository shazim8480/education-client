import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo-n.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <section>
      <Popover className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Education</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
              </Link>
            </div>
            {/* responsive mobile menu */}
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex ">
              <div className="md:flex md:justify-end items-center space-x-10 ">
                <Link
                  to="/"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  Courses
                </Link>
                <Link
                  to="/"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  Blogs
                </Link>
                <Link
                  to="/"
                  className="text-base font-body text-secondary hover:text-gray-900"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="whitespace-nowrap text-base font-body text-secondary hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-body font-medium text-gray-700 bg-primary hover:bg-yellow-300"
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
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="logo" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-1 gap-y-4">
                  <Link
                    href="#"
                    className="text-base font-body text-secondary hover:text-gray-700"
                  >
                    Courses
                  </Link>

                  <Link
                    to="/"
                    className="text-base font-body text-secondary hover:text-gray-700"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/"
                    className="text-base font-body text-secondary hover:text-gray-700"
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    to="/"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-body font-medium text-gray-700 bg-primary hover:bg-yellow-300"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-secondary font-medium font-body">
                    Existing customer?{" "}
                    <Link
                      to="/"
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
