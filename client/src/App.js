import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
