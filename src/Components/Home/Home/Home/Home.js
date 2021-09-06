import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import TopNav from "../TopNav/TopNav";

const Home = () => {
  return (
    <main>
      <TopNav />
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
