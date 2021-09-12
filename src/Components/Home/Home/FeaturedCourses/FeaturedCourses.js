import React, { useContext } from "react";
import { CourseDetailsContext } from "../../../../App";
import CourseCard from "../CourseCard/CourseCard";

const FeaturedCourses = () => {
  const [courseDetails] = useContext(CourseDetailsContext);

  return (
    <section className="container py-16 md:pt-52 md:pb-28 lg:pt-52 lg:pb-28">
      <h3 className="pb-12 text-3xl text-center font-heading md:text-4xl text-secondary">
        Top Featured Courses
      </h3>

      <div className="grid grid-cols-1 gap-8 pb-6 mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {courseDetails.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
