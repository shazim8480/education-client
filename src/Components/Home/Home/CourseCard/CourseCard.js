import React from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { thumbnail, author, id, title } = course;

  // buy now btn onClick //
  let history = useHistory();
  const handleClickToDetails = () => {
    history.push("/courseDetails/" + id);
  };

  return (
    <div className="border-2 border-gray-200 rounded-md shadow-sm font-body">
      <img className="object-cover" src={thumbnail} alt="thumbnail" />
      <button onClick={handleClickToDetails}>
        <h3 className="pt-3 pb-2 pl-4 pr-4 text-xl font-semibold text-left">
          {title}
        </h3>
      </button>
      <p className="pb-4 pl-4 text-sm text-gray-400">{author}</p>
    </div>
  );
};

export default CourseCard;
