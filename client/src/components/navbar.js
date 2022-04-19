import React from 'react';
import './navbar.css';
function NavBar(){
    return(
      <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand" href="/"><img className='logo' src="/logo.png" alt="Logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <h1 className='heading'> Project Portal</h1>
      </ul>
      <p className='clg navbar-text'>Indian Institute of Technology (Banaras Hindu University) Varanasi</p>
    </div>
    
  </div>
</nav>
      </>  
    )
}

export default NavBar;