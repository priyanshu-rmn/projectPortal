// import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import ProffDashboard from "./pages/ProffDashboard";
import StudentProfileReg from "./pages/StudentProfileReg";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

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
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        {/* method 1 */}
        {isLoggedIn && (
          <Route exact path="/s/dashboard" element={<StudentDashboard />} />
        )}
        {/* method 2 */}
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
