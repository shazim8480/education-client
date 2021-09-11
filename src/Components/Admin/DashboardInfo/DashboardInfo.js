import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faLayerGroup,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import DashboardData from "../DashboardData/DashboardData";

const dashBoardData = [
  {
    title: "Total Students",
    totalNumbers: "208",
    icon: faUserGraduate,
  },
  {
    title: "Total Courses",
    totalNumbers: "18",
    icon: faLayerGroup,
  },
  {
    title: "Total Earnings",
    totalNumbers: "20K",
    icon: faDollarSign,
  },
];

const DashboardInfo = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className="w-full h-full">
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}
      <div className="grid grid-cols-1 gap-8 p-10 pb-6 mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
        {dashBoardData.map((dashboardInfo) => (
          <DashboardData
            dashboardInfo={dashboardInfo}
            key={dashboardInfo.title}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardInfo;
