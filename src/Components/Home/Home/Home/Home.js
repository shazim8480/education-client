import React from "react";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import TopNav from "../TopNav/TopNav";
import UpcomingCard from "../UpcomingCard/UpcomingCard";

const Home = () => {
  return (
    <main>
      <TopNav />
      <Navbar />
      <Hero />
      <UpcomingCard />
      <FeaturedCourses />
    </main>
  );
};

export default Home;
