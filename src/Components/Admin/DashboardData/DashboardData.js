import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardData = ({ dashboardInfo }) => {
  return (
    <div className="px-10 py-6 shadow-lg bg-yellow-50 rounded-2xl ">
      <div className="flex items-center">
        <span className="relative px-4 py-3 bg-purple-200 rounded-xl">
          <FontAwesomeIcon icon={dashboardInfo.icon} size="lg" />
        </span>
        <p className="ml-2 text-lg text-black font-body">
          {dashboardInfo.title}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="my-4 text-4xl font-bold text-center text-gray-700 font-heading">
          {dashboardInfo.totalNumbers}
        </p>
        <div className="flex items-center justify-between text-sm text-green-500">
          <div className="flex justify-center">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
            </svg>
            <span>5.5%</span>
          </div>
          <span className="flex-1 text-right text-gray-400">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
