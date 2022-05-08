// import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/LoginPage";

import StudentDashboard from "./pages/studentPages/StudentDashboard";
import StudentProfileReg from "./pages/studentPages/StudentProfileReg";
import StudentProfilePage from "./pages/studentPages/StudentProfilePage";

import ProffDashboard from "./pages/proffPages/ProffDashboard";
import ProffProfileReg from "./pages/proffPages/ProffProfileReg";
import ProffProfilePage from "./pages/proffPages/ProffProfilePage";
import ProffSelectedStudentsPage from "./pages/proffPages/ProffSelectedStudentsPage";

import AdminDashboard from "./pages/adminPages/AdminDashboard";
import FacultyPage from "./pages/adminPages/FacultyPage";

import Header from "./components/layout/Header";
import UpperNavbar from "./components/layout/UpperNavbar";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import UseReducerLearn from "./context/UseReducerLearn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userObject = useContext(UserContext);
  console.log(userObject, isLoggedIn);
  useEffect(() => {
    if (Object.keys(userObject).length !== 0) {
      setIsLoggedIn(true);
    }
  }, [userObject]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      {isLoggedIn && <UpperNavbar />}
      
      <Routes>
        <Route exact path="/" element={<UseReducerLearn />} />
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
        {isLoggedIn && (
          <Route exact path="/p/profileReg" element={<ProffProfileReg />} />
        )}
        {isLoggedIn && (
          <Route exact path="/p/profile" element={<ProffProfilePage />} />
        )}
        {isLoggedIn && (
          <Route
            exact
            path="/p/selectedStudents"
            element={<ProffSelectedStudentsPage />}
          />
        )}
        {isLoggedIn && (
          <Route exact path="/a/dashboard" element={<AdminDashboard />} />
        )}
        {isLoggedIn && (
          <Route exact path="/a/faculties" element={<FacultyPage />} />
        )}
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
