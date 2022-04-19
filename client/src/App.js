import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LoginPage from './Components/LoginPage';
import RegForm from './Components/RegForm';
function App() {
  return (
    <>
     <NavBar/>
     <Routes>
         <Route exact path='/' element= {<LoginPage/>}/>
         < Route path='/regform' element= {<RegForm/>}/>
     </Routes>
     
   
    </>
  );
}

export default App;