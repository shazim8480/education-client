import React from "react";
import uxImg from "../../../../images/design.png";
import logicImg from "../../../../images/critical-thinking.png";
import expImg from "../../../../images/experience-design.png";
import CourseCard from "../CourseCard/CourseCard";

const courseData = [
  {
    title: "User Research for User Experience Design",
    author: "The Museum of Modern Art",
    thumbnail: uxImg,
  },
  {
    title: "Introduction to Logic and Critical Thinking",
    author: "Duke University",
    thumbnail: logicImg,
  },
  {
    title: "Buddhism and Modern Psychology",
    author: "The Museum of Modern Art",
    thumbnail: expImg,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="container py-16  md:pt-52 md:pb-28 lg:pt-52 lg:pb-28">
      <h3 className="pb-12 text-center font-heading text-3xl md:text-4xl text-secondary">
        Top Featured Courses
      </h3>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
        {courseData.map((course) => (
          <CourseCard course={course} id={course.title} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;