import React from "react";

const CourseFormData = () => {
  return (
    <section>
      <form className="max-w-2xl mx-auto shadow-md md:w-3/4 font-body">
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h4 className="max-w-sm mx-auto font-semibold md:w-1/3 text-secondary">
              Course Title
            </h4>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative ">
                <input
                  type="text"
                  id="title"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Enter Title"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h4 className="max-w-sm mx-auto font-semibold md:w-1/3 text-secondary">
              Course Information
            </h4>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="relative ">
                  <textarea
                    type="text"
                    id="description"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <select
                    className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-secondary focus:border-secondary"
                    name="category"
                  >
                    <option value="">Select a Category</option>
                    <option value="web">Web Development</option>
                    <option value="design">UX/UI Design</option>
                    <option value="research">Research</option>
                    <option value="programming">Programming & Tech</option>
                    <option value="philosophy">Philosophy</option>
                  </select>
                </div>
                <div className="relative mt-6">
                  <input
                    type="number"
                    id="price"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Enter Price"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h4 className="max-w-sm mx-auto font-semibold md:w-1/3 text-secondary">
              Additional Information
            </h4>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative ">
                <div className="flex items-center">
                  <p>Upload Thumbnail</p>
                  <input
                    type="file"
                    id="courseImg"
                    className="flex-1 w-full pl-3"
                  />
                </div>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center">
                  <p>Upload Video</p>
                  <input
                    type="file"
                    id="courseImg"
                    className="flex-1 w-full pl-12"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Save Data
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CourseFormData;
