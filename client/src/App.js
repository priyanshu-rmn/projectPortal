// import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/studentPages/StudentDashboard";
import StudentProfileReg from "./pages/studentPages/StudentProfileReg";
import StudentProfilePage from "./pages/studentPages/StudentProfilePage";

import ProffDashboard from "./pages/ProffDashboard";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import UpperNavbar from "./components/layout/UpperNavbar";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const userObject = useContext(UserContext);
  console.log(userObject, isLoggedIn);
  useEffect(() => {
    if (Object.keys(userObject).length !== 0) {
      setisLoggedIn(true);
    }
  }, [userObject]);

  return (
    <>
      <Header showLogoutButton={isLoggedIn} />
      {isLoggedIn && <UpperNavbar></UpperNavbar>}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        {isLoggedIn && (
          <Route exact path="/s/dashboard" element={<StudentDashboard />} />
        )}
        {isLoggedIn && (
          <Route exact path="/s/profile" element={<StudentProfilePage />} />
        )}
        {isLoggedIn && (
          <Route exact path="/s/profileReg" element={<StudentProfileReg />} />
        )}
        {isLoggedIn && (
          <Route exact path="/p/dashboard" element={<ProffDashboard />} />
        )}
        {/* <Route exact path="/p/profileReg" element={<ProffProfileRegistration />} /> */}
        <Route
          path="*"
          element={
            <>
              <div>404 PAGE NOT FOUND</div>
              <Link to="/login">Login</Link>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
