import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home/Home";
import Login from "./Components/Authentication/Login/Login";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import UploadCourse from "./Components/Admin/UploadCourse/UploadCourse";

function App() {
  return (
    <Router>
      <Switch>
        {/* user routes */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
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
  );
}

export default App;
