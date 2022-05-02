// import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import ProffDashboard from "./pages/ProffDashboard";
import StudentProfileReg from "./pages/StudentProfileReg";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function App() {
  const userObject = useContext(UserContext);
  // console.log(userObject);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/s/dashboard" element={<StudentDashboard />} />
        <Route exact path="/s/profileReg" element={<StudentProfileReg />} />
        <Route exact path="/p/dashboard" element={<ProffDashboard />} />
        {/* <Route exact path="/p/profileReg" element={<ProffProfileRegistration />} /> */}
      </Routes>
    </>
  );
}

export default App;
