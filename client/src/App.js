import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import ProffDashboard from "./pages/ProffDashboard";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function App() {
  const userObject = useContext( UserContext );
  console.log(userObject);
  return (
    <>
      <Header/>
      <Routes>   
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/sdashboard" element={<StudentDashboard />} />
        <Route exact path="/pdashboard" element={<ProffDashboard />} />
      </Routes>
    </>
  );
}

export default App;
