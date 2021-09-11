import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faLayerGroup,
  faUpload,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const sideBarMenus = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: faTh,
  },
  {
    title: "Upload",
    url: "/admin/uploadCourse",
    icon: faUpload,
  },
  {
    title: "Courses",
    url: "/admin/dashboard",
    icon: faLayerGroup,
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  //   const location = useLocation();
  //   const { pathname } = location;
  //   const page = pathname.split("/")[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section className="w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0  bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>
      {/* //////////////////////// */}

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform min-h-full overflow-y-hidden lg:overflow-y-hidden  w-64 flex-shrink-0 p-4 transition-transform duration-200 ease-in-out text-gray-100 font-body bg-secondary ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 mb-10 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="block text-gray-500 lg:hidden hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 rounded-sm bg-primary"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center p-2 mt-4 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait" // src change when login function applied //
            alt="admin-img"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="pr-2 text-2xl font-semibold">Leroy Jenkins</h4>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          <ul className="mt-5 mb-5 space-y-1">
            {/* map here */}
            {sideBarMenus.map((menu) => {
              return (
                <li>
                  <Link
                    to={menu.url}
                    className="flex items-center px-2 py-3 space-x-3 rounded-md text-hero"
                  >
                    <FontAwesomeIcon icon={menu.icon} />
                    <span>{menu.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* static menus here */}
          <ul className="pt-4 space-y-1 lg:pb-48 pb-96">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md text-hero"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
