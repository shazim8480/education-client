import React, { useState } from "react";
import CourseForm from "../CourseForm/CourseForm";
import Sidebar from "../Sidebar/Sidebar";

const UploadCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <CourseForm sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
};

export default UploadCourse;
