import React from "react";
import studentFeedbackImg from "../../../../images/student-feedback.png";
import artDesignImg from "../../../../images/art-design.png";

const StudentFeedback = () => {
  return (
    <section className="container">
      <div className="mx-auto md:flex lg:flex">
        <div className="lg:w-1/2 w-full lg:mb-0">
          <div className="">
            <img
              alt="feedback"
              className="object-contain rounded-lg h-full w-full"
              src={studentFeedbackImg}
            />
          </div>
          {/* student label */}
          <div className="relative pb-2">
            <div className="z-20 drop-shadow-md absolute w-full md:w-1/2 lg:w-1/2 rounded-sm -inset-y-10 inset-x-2 md:inset-x-40 lg:inset-x-40 text-center bg-hero">
              <h4 className="text-secondary font-heading text-2xl pt-4">
                Kimmie Vo
              </h4>
              <p className="text-gray-500 font-body text-md mb-2">
                Junior Designer
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12        lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow text-left">
              {/* div - student testimonial */}
              <div>
                <h3 className="text-secondary md:mt-0 lg:mt-0 mt-20 block text-3xl md:text-5xl font-medium font-heading mb-3">
                  Successful Student{" "}
                  <span className="text-primary">Feedback</span>
                </h3>
                <p className="leading-relaxed mt-8 mb-8 md:mb-12 lg:mb-12 text-secondary font-body text-md">
                  Take courses from the world’s best instructors and
                  universities. Courses include recorded auto-graded and
                  peer-reviewed assignments, video lectures, and community
                  discussion forums. When you complete a course, you’ll be
                  eligible to receive a shareable electronic Course Certificate
                  for a small fee.
                </p>
                <h4 className="font-body text-secondary font-bold text-xl mb-5">
                  The courses that Kimmie has taken
                </h4>
              </div>
              {/* div - courses student took */}
              <div className="w-full bg-hero rounded-lg">
                <div className="flex justify-start items-center font-body px-4 py-5">
                  {/* img */}
                  <img
                    className="w-1/3 ml-2 h-16 object-contain object-left"
                    src={artDesignImg}
                    alt="enrolledCourse"
                  />
                  {/* text div */}
                  <div className="pl-5 md:pl-0 lg:pl-0 relative">
                    <h4 className="text-secondary font-bold text-md md:text-xl lg:text-xl leading-tight">
                      Modern and Contemporary Art and Design
                    </h4>
                    <p className="text-gray-400 text-sm mt-2">
                      The Museum of Modern Art
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
