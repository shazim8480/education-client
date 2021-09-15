import React, { useContext } from "react";
import { CourseDetailsContext } from "../../../App";
import CourseCard from "../Home/CourseCard/CourseCard";

const CategoryDetails = () => {
  const [courseDetails] = useContext(CourseDetailsContext);

  return (
    <section className="container py-16 mb-20 bg-hero">
      {/* Header info */}
      <div className="lg:w-3/5 header-info">
        <h5 className="text-sm font-bold text-center lg:text-left lg:py-2 font-body text-primary">
          Course Category
        </h5>
        {/* the title will dynamically change */}
        <h3 className="mt-3 mb-12 text-4xl text-center lg:text-left text-secondary font-heading lg:text-5xl">
          Web Development
        </h3>
      </div>

      {/* category select -- also dynamic from admin */}
      <div className="grid grid-cols-1 space-y-8 lg:gap-12 font-body lg:grid-cols-4 lg:justify-items-between lg:space-y-0 justify-items-center">
        <div className="relative">
          <span className="font-semibold text-gray-700">Categories</span>
          <select
            className="block w-56 px-3 py-2 mt-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            name="category"
          >
            <option value="web">Web Development</option>
            <option value="design">UX/UI Design</option>
            <option value="research">Research</option>
            <option value="programming">Programming & Tech</option>
            <option value="philosophy">Philosophy</option>
          </select>
        </div>
        <div className="relative">
          <span className="font-semibold text-gray-700">Level</span>
          <select
            className="block w-56 px-3 py-2 mt-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            name="level"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className="relative">
          <span className="font-semibold text-gray-700">Language</span>
          <select
            className="block w-56 px-3 py-2 mt-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            name="language"
          >
            <option value="eng">English</option>
            <option value="bng">Bengali</option>
            <option value="tur">Turkish</option>
          </select>
        </div>
        <div className="relative">
          <span className="font-semibold text-gray-700">Instructor</span>
          <select
            className="block w-56 px-3 py-2 mt-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            name="instructor"
          >
            <option value="instructor">All Instructor</option>
          </select>
        </div>
        {/* submit button -- upon all category select, course appears */}
        <div className="flex items-center justify-center w-full lg:justify-start">
          <button className="px-5 py-2 mt-4 ml-0 border-0 rounded lg:mt-0 lg:ml-3 font-body text-secondary bg-primary focus:outline-none hover:bg-yellow-300 text-md">
            Submit
          </button>
        </div>
      </div>

      {/* courses available upon category select -- dynamic */}
      <div className="grid grid-cols-1 gap-8 pt-24 mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {courseDetails.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default CategoryDetails;
