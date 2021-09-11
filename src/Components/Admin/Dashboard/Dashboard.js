import React, { useState } from "react";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className="lg:flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashboardInfo
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </section>
  );
};

export default Dashboard;
