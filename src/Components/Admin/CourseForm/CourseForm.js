import React from "react";
import CourseFormData from "../CourseFormData/CourseFormData";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const CourseForm = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className="flex-1">
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}
      <div className="p-5">
        <CourseFormData />
      </div>
    </section>
  );
};

export default CourseForm;
