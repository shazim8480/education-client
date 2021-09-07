import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="border-2 border-gray-200 shadow-sm rounded-md font-body">
      <img className="object-cover" src={course.thumbnail} alt="thumbnail" />
      <Link to="/">
        <h3 className="font-semibold text-xl pr-4 pl-4 pt-3 pb-2">
          {course.title}
        </h3>
      </Link>
      <p className="text-gray-400 text-sm pl-4 pb-4">{course.author}</p>
    </div>
  );
};

export default CourseCard;
