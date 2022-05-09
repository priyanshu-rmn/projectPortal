import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import AdminContextProvider from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <AdminContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminContextProvider>
  </UserContextProvider>
);
