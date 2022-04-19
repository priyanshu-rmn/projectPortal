import React from 'react';
import './sidenavbar.css';
function SideNavBar(){
    return(
      <>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a href="#" className="list-group-item list-group-item-action py-4 ripple" aria-current="true">
            <span>Dashboard</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-4 ripple ">
          <span>Profile</span>
        </a>
      </div>
    </div>
  </nav>
      </>  
    )
}

export default SideNavBar;
