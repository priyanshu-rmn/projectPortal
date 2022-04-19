import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import SignINbtn from "./components/authenBTN";
import Login from "./components/login";
import ProfileReg from "./components/profileReg";
import PSelect from './pages/ProffSelect';
import Sreq from './pages/StudReq';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<SignINbtn/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/preg" element={<ProfileReg/>} />
                <Route exact path="/ps" element={<PSelect/>} />
                <Route exact path="/ss" element={<Sreq/>} />
            </Routes>
        </Router>   
    )
}

export default App;