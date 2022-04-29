// import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { useContext } from "react";

import { UserContext } from "./UserContext";


function App() {
  const userObject = useContext( UserContext );
  console.log(userObject);
    return (
      <>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </>
    );
}

export default App;
