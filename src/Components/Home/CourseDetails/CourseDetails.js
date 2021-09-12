import React from "react";
import CourseDetailsInner from "../CourseDetailsInner/CourseDetailsInner";
import BottomFooter from "../Home/BottomFooter/BottomFooter";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import StudentFeedback from "../Home/StudentFeedback/StudentFeedback";
import Subscribe from "../Home/Subscribe/Subscribe";
import TopNav from "../Home/TopNav/TopNav";

const CourseDetails = () => {
  return (
    <section>
      <TopNav />
      <Navbar />
      {/* course details component here */}
      <CourseDetailsInner />
      {/* course details component here */}
      <StudentFeedback />
      <Subscribe />
      <Footer />
      <BottomFooter />
    </section>
  );
};

export default CourseDetails;
