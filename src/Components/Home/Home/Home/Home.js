import React from "react";
import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";
import Funfacts from "../FunFacts/Funfacts";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
import Subscribe from "../Subscribe/Subscribe";
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
      <StudentFeedback />
      <Funfacts />
      <Subscribe />
    </main>
  );
};

export default Home;
