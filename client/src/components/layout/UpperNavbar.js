import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpperNavbar({isDashboard , setIsDashboard}){

    const navigate = useNavigate();
    const ClickDashboard =()=> {
        setIsDashboard(true);
        navigate('/s/dashboard');
    }

    const ClickProfile=()=> {
        setIsDashboard(false);
        navigate('/s/profile');
    }

    return (
        <div >
            {isDashboard?
                        <div style={{margin:"2%", backgroundColor:"rgba(0,0,0,0.1)"}} >
                        <ul class="nav nav-tabs nav-fill">
                            <li class="nav-item">
                            <div   style={{cursor:"pointer" ,paddingTop:"7px" ,paddingBottom:"7px" , backgroundColor:"rgba(0,0,0,0.5)" }} onClick={ClickDashboard}>
                                <h3>DASHBOARD</h3>
                            </div>
                        </li>
            
                        <li class="nav-item">
                        <div   style={{cursor:"pointer" ,paddingTop:"7px" ,paddingBottom:"7px"}} onClick={ClickProfile}>
                          <h3>PROFILE</h3>
                        </div>
                        </li>
                        </ul>
                        </div>
                        :
        

            <div style={{margin:"2%", backgroundColor:"rgba(0,0,0,0.1)"}} >
            <ul class="nav nav-tabs nav-fill">
                <li class="nav-item">
                <div   style={{cursor:"pointer" ,paddingTop:"7px" ,paddingBottom:"7px" }} onClick={ClickDashboard}>
                    <h3>DASHBOARD</h3>
                </div>
            </li>

            <li class="nav-item">
              <div
                style={{
                  cursor: "pointer",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                }}
                onClick={ClickProfile}
              >
                <h3>PROFILE</h3>
              </div>
            </li>
          </ul>
        </div>
       }
    </div>
  );
}

/*
          <div style={{display : "flex"}}>
            <div style={{backgroundColor: "rgba(0,0,0,0.1)", boxShadow:" 1 3px 7px rgba(0,0,0,0.5)",padding: "1rem 2rem"}}>
                <h3>DASHBOARD</h3>
             
              </div>
              <div style={{backgroundColor: "rgba(0,0,0,0.1)", boxShadow:" 1 3px 7px rgba(0,0,0,0.5)",padding: "1rem 2rem"}} >
                <h3>PROFILE</h3>
              </div>
              </div>
*/
/*
<div style={{margin:"2%", backgroundColor:"rgba(0,0,0,0.1)"}} >
            <ul class="nav nav-tabs nav-fill">
  <li class="nav-item">
  <div   style={{cursor:"pointer" ,paddingTop:"7px" ,paddingBottom:"7px" , backgroundColor:"rgba(0,0,0,0.1)"}}>
               <h3>DASHBOARD</h3>
        </div>
  </li>

  <li class="nav-item">
  <div   style={{cursor:"pointer" ,paddingTop:"7px" ,paddingBottom:"7px"}}>
              <h3>PROFILE</h3>
        </div>
  </li>
</ul>
</div>
*/

/*
          <div style={{margin:"2%",padding:"10px", backgroundColor:"rgba(0,0,0,0.1)",display:"flex"}} >
        <div   style={{cursor:"pointer"   ,  paddingTop:"7px" , marginLeft:"17%",textDecoration: "underline"}}>
               DASHBOARD
        </div>
        <div  style={{marginLeft:"25%" ,padding:"0px 0px 0px 0px"}}>
              |
        </div>
        <div  style={{cursor:"pointer" , paddingTop:"7px",marginLeft:"" , textDecoration: "underline"}}>
               PROFILE
        </div>
        
    </div>  
*/
