import React from "react";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import BottomFooter from "../Home/BottomFooter/BottomFooter";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import Subscribe from "../Home/Subscribe/Subscribe";
import TopNav from "../Home/TopNav/TopNav";

const CourseCategory = () => {
  return (
    <section>
      <TopNav />
      <Navbar />
      {/* Category Component Here */}
      <CategoryDetails />
      {/* Category Component Here */}
      <Subscribe />
      <Footer />
      <BottomFooter />
    </section>
  );
};

export default CourseCategory;
