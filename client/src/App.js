import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import ProffDashboard from "./pages/ProffDashboard";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>   
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/sdashboard" element={<StudentDashboard />} />
        <Route exact path="/pdashboard" element={<ProffDashboard />} />
      </Routes>
    </>
  );
}

export default App;
