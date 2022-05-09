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
import { AdminContext } from "./context/AdminContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userObject = useContext(UserContext);
  console.log(userObject, isLoggedIn);
  useEffect(() => {
    if (Object.keys(userObject).length !== 0) {
      setIsLoggedIn(true);
    }
  }, [userObject]);

  const adminObject = useContext(AdminContext);
  const processStage = adminObject.processStage;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <UpperNavbar />}

      <Routes>                                                                                                                                                                                                                                                                                                                                                                                                                          
        <Route exact path="/" element={<UseReducerLearn />} />
        {<Route exact path="/login" element={<LoginPage />} />}

        {isLoggedIn && (
          <>
            <Route path="/s/">
              <Route exact path="dashboard" element={<StudentDashboard />} />
              <Route exact path="profile" element={<StudentProfilePage />} />
              <Route exact path="profileReg" element={<StudentProfileReg />} />
            </Route>
            <Route path="/p/">
              <Route exact path="dashboard" element={<ProffDashboard />} />
              <Route exact path="profileReg" element={<ProffProfileReg />} />
              <Route exact path="profile" element={<ProffProfilePage />} />
              <Route
                exact
                path="selectedStudents"
                element={<ProffSelectedStudentsPage />}
              />
            </Route>
            )
            <Route path="/a/">
              <Route exact path="dashboard" element={<AdminDashboard />} />
              <Route exact path="faculties" element={<FacultyPage />} />
            </Route>
          </>
        )}

        <Route
          path="*"
          element={
            <>
              <div>404 PAGE NOT FOUND OR NOT LOGGED IN </div>
              <Link to="/login">Login</Link>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
