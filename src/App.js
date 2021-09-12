import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home/Home";
import Login from "./Components/Authentication/Login/Login";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import UploadCourse from "./Components/Admin/UploadCourse/UploadCourse";
import CourseDetails from "./Components/Home/CourseDetails/CourseDetails";
import { createContext, useState } from "react";

// import images //
import uxImg from "./images/design.png";
import logicImg from "./images/critical-thinking.png";
import expImg from "./images/experience-design.png";

// for user login
export const UserContext = createContext();
// for course content
export const CourseDetailsContext = createContext();

function App() {
  // fake course data // temporary use for design purpose
  const courseData = [
    {
      id: "1",
      price: "30.00",
      title: "User Research for User Experience Design",
      author: "The Museum of Modern Art",
      thumbnail: uxImg,
      desc: "The online Master of Computer and Information Technology degree '(MCIT Online)' is an online masters degree in Computer Science tailored for non-Computer Science majors. Offered by the University of Pennsylvania, this new program brings the long-running, established on-campus MCIT degree online. The MCIT Online program empowers students without computer science backgrounds to succeed in computing and technology fields. MCIT Online students come from diverse academic backgrounds ranging from business and history to chemistry and medicine.",

      desc_Alt:
        "Computer science might not be in your past, but it will be in your future. Technology has an immense impact on our lives, and is creating fields and positions that didn’t exist five years ago. Equipped with a competitive computer science degree, MCIT Online graduates will be uniquely positioned to fill roles in finance, healthcare, education, and government, as well as in the core software development industry. Exposure to real-world projects throughout the program will prepare students to utilize skills that positively impact society.",

      enrolledStudents: "20",
      lectures: "8",
      totalHours: "2.5",
      category: "UI/UX Design",
      level: "Intermediate",
      learningOutcome_1:
        "vy League Quality A first-of-its-kind program that offers an Ivy League master’s degree in Computer Science designed for non-CS majors.",
      learningOutcome_2:
        "Built Around Your Schedule The coursework is 100 percent online. You’ll benefit from the same high-quality instruction as on-campus students and graduate with the same degree. The diploma does not indicate whether the degree was earned online or on-campus.",
      learningOutcome_3:
        "Accessible Pricing The cost of the MCIT Online degree  is significantly less than on-campus alternatives and most online master’s degrees in Computer Science. Students pay $2,640 per course unit for a total of 10 courses units. Tuition and fees are posted as a guide and may be subject to change.",
    },
    {
      id: "2",
      price: "20.00",
      title: "Introduction to Logic and Critical Thinking",
      author: "Duke University",
      thumbnail: logicImg,
      desc: "The online Master of Computer and Information Technology degree '(MCIT Online)' is an online masters degree in Computer Science tailored for non-Computer Science majors. Offered by the University of Pennsylvania, this new program brings the long-running, established on-campus MCIT degree online. The MCIT Online program empowers students without computer science backgrounds to succeed in computing and technology fields. MCIT Online students come from diverse academic backgrounds ranging from business and history to chemistry and medicine.",

      desc_Alt:
        "Computer science might not be in your past, but it will be in your future. Technology has an immense impact on our lives, and is creating fields and positions that didn’t exist five years ago. Equipped with a competitive computer science degree, MCIT Online graduates will be uniquely positioned to fill roles in finance, healthcare, education, and government, as well as in the core software development industry. Exposure to real-world projects throughout the program will prepare students to utilize skills that positively impact society.",

      enrolledStudents: "120",
      lectures: "20",
      totalHours: "4",
      category: "Logical Thinking",
      level: "Beginner",
      learningOutcome_1:
        "vy League Quality A first-of-its-kind program that offers an Ivy League master’s degree in Computer Science designed for non-CS majors.",
      learningOutcome_2:
        "Built Around Your Schedule The coursework is 100 percent online. You’ll benefit from the same high-quality instruction as on-campus students and graduate with the same degree. The diploma does not indicate whether the degree was earned online or on-campus.",
      learningOutcome_3:
        "Accessible Pricing The cost of the MCIT Online degree  is significantly less than on-campus alternatives and most online master’s degrees in Computer Science. Students pay $2,640 per course unit for a total of 10 courses units. Tuition and fees are posted as a guide and may be subject to change.",
    },
    {
      id: "3",
      price: "25.00",
      title: "Buddhism and Modern Psychology",
      author: "The Museum of Modern Art",
      thumbnail: expImg,
      desc: "The online Master of Computer and Information Technology degree '(MCIT Online)' is an online masters degree in Computer Science tailored for non-Computer Science majors. Offered by the University of Pennsylvania, this new program brings the long-running, established on-campus MCIT degree online. The MCIT Online program empowers students without computer science backgrounds to succeed in computing and technology fields. MCIT Online students come from diverse academic backgrounds ranging from business and history to chemistry and medicine.",

      desc_Alt:
        "Computer science might not be in your past, but it will be in your future. Technology has an immense impact on our lives, and is creating fields and positions that didn’t exist five years ago. Equipped with a competitive computer science degree, MCIT Online graduates will be uniquely positioned to fill roles in finance, healthcare, education, and government, as well as in the core software development industry. Exposure to real-world projects throughout the program will prepare students to utilize skills that positively impact society.",

      enrolledStudents: "250",
      lectures: "22",
      totalHours: "6",
      category: "Philosophy",
      level: "Expert",
      learningOutcome_1:
        "vy League Quality A first-of-its-kind program that offers an Ivy League master’s degree in Computer Science designed for non-CS majors.",
      learningOutcome_2:
        "Built Around Your Schedule The coursework is 100 percent online. You’ll benefit from the same high-quality instruction as on-campus students and graduate with the same degree. The diploma does not indicate whether the degree was earned online or on-campus.",
      learningOutcome_3:
        "Accessible Pricing The cost of the MCIT Online degree  is significantly less than on-campus alternatives and most online master’s degrees in Computer Science. Students pay $2,640 per course unit for a total of 10 courses units. Tuition and fees are posted as a guide and may be subject to change.",
    },
  ];

  const [courseDetails, setCourseDetails] = useState(courseData);

  return (
    <CourseDetailsContext.Provider value={[courseDetails, setCourseDetails]}>
      <Router>
        <Switch>
          {/* user routes */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/courseDetails/:id">
            <CourseDetails />
          </Route>
          {/* auth */}
          <Route path="/login">
            <Login />
          </Route>
          {/* admin routes */}
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/uploadCourse">
            <UploadCourse />
          </Route>
        </Switch>
      </Router>
    </CourseDetailsContext.Provider>
  );
}

export default App;
