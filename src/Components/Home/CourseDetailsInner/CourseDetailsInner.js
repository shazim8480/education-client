import React, { useContext } from "react";
import { useParams } from "react-router";
import { CourseDetailsContext } from "../../../App";
import contactSupportImg from "../../../images/searching.png";

const CourseDetailsInner = () => {
  const [courseDetails] = useContext(CourseDetailsContext);

  const { id } = useParams();
  //FINDING THE individual course id for showing the details for each course and setting it to courseData//
  const courseData = courseDetails.find((course) => course.id === id);
  //   console.log(courseData);

  //   console.log(courseDetails);
  return (
    <div className="container py-16 mb-20 bg-hero">
      <div className="lg:flex lg:justify-around">
        <div className="lg:w-3/5 header-info">
          <h5 className="text-sm font-bold text-center lg:text-left lg:py-5 font-body text-primary">
            Course Details
          </h5>
          <h3 className="mt-6 mb-12 text-4xl text-center lg:text-left text-secondary font-heading lg:text-5xl">
            {courseData.title}
          </h3>
        </div>
        <div className="mb-24 text-center lg:mb-0 lg:ml-56 lg:w-2/5 lg:mt-20 lg:text-left price-CTA">
          {/* price */}
          <h6 className="mb-8 text-4xl font-semibold lg:mb-6 font-heading text-secondary">
            $ {courseData.price}
          </h6>
          {/* button group */}
          <div className="flex justify-center mt-4 ml-6 lg:mb-0 mb-14 lg:ml-0 lg:justify-start">
            <button className="inline-flex items-center px-5 py-2 border-0 rounded font-body text-secondary bg-primary focus:outline-none hover:bg-yellow-300 text-md">
              Buy Now
            </button>

            <button className="inline-flex items-center px-5 py-2 ml-4 text-white border-2 rounded font-body bg-secondary border-secondary hover:bg-blue-900 text-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* main content holder div */}
      <div className="lg:flex lg:justify-between">
        {/* course all description div--left */}
        <div className="lg:w-3/5">
          {/* course thumbnail */}
          <img
            className="object-contain w-full"
            src={courseData.thumbnail}
            alt="thumbnail"
          />
          {/* course description */}
          <div className="mt-8">
            <h5 className="text-3xl text-left lg:text-4xl text-secondary font-heading">
              Description
            </h5>
            <div className="py-5 text-justify text-gray-800 font-body">
              <p className="py-4">{courseData.desc}</p>
              <p>{courseData.desc_Alt}</p>
            </div>
          </div>
          {/* learning outcomes */}
          <div className="mt-8">
            <h5 className="text-3xl text-left lg:text-4xl text-secondary font-heading">
              What You'll Learn
            </h5>
            <div className="py-5 text-justify text-gray-800 font-body">
              <div className="flex justify-start">
                <svg
                  className="w-8 h-8 mt-3 mr-3 text-teal"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="pt-4">{courseData.learningOutcome_1}</p>
              </div>
              <div className="flex justify-start">
                <svg
                  className="w-16 h-16 mr-3 -mt-1 text-teal"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="pt-4">{courseData.learningOutcome_2}</p>
              </div>
              <div className="flex justify-start">
                <svg
                  className="w-16 h-16 mr-3 -mt-1 text-teal"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="pt-4">{courseData.learningOutcome_3}</p>
              </div>
            </div>
          </div>
        </div>
        {/* course all info div --right*/}

        <div className="my-20 lg:pl-20 lg:my-0 lg:w-2/5 font-body">
          <div className="px-4 py-3 space-y-3 rounded-lg shadow-sm bg-coursePriceBg">
            <div className="flex justify-start">
              <span className="font-semibold text-secondary">Enrolled :</span>{" "}
              <p className="pl-3 text-gray-700">
                {courseData.enrolledStudents} students
              </p>{" "}
            </div>
            <hr />
            <div className="flex justify-start">
              <span className="font-semibold text-secondary">Duration :</span>{" "}
              <p className="pl-3 text-gray-700">
                {courseData.totalHours} hours
              </p>{" "}
            </div>
            <hr />
            <div className="flex justify-start">
              <span className="font-semibold text-secondary">Lectures :</span>{" "}
              <p className="pl-3 text-gray-700">{courseData.lectures}</p>{" "}
            </div>
            <hr />
            <div className="flex justify-start">
              <span className="font-semibold text-secondary">Category :</span>{" "}
              <p className="pl-3 text-gray-700">{courseData.category}</p>{" "}
            </div>
            <hr />
            <div className="flex justify-start">
              <span className="font-semibold text-secondary">Level :</span>{" "}
              <p className="pl-3 text-gray-700">{courseData.level}</p>{" "}
            </div>
            <hr />
            {/* img & contact div */}
            <div>
              <img
                className="flex justify-center object-contain w-full h-36"
                src={contactSupportImg}
                alt="contact-support"
              />
              <p className="pt-4 text-center text-gray-500">
                Contact customer support at
                <span className="block font-semibold text-teal">
                  customer@support.com
                </span>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsInner;
