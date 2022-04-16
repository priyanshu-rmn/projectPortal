import React from 'react';
import './LoginPage.css';
function RegForm(){
    return(
        <>
             <div className="loginbg">
                 <h1 className='pt-5 head'>Complete your Profile</h1>
                  <div className='Form'>
                      <div className="row pt-5">
                          <div className="ff">
                              <input type="text" placeholder='' required />
                              <label   htmlFor="">First Name</label>
                          </div>
                          <div className="ff">
                              <input type="text" placeholder='' required />
                              <label   htmlFor="">Last Name</label>
                          </div>
                      </div>
                      <div className="row pt-4">
                          <div className="ff">
                              <input type="url" placeholder='' required= "not required"/>
                              <label   htmlFor="">Resume Link</label>
                          </div>
                          <div className="ff">
                              <input type="number" placeholder='' step="any" required />
                              <label   htmlFor="">Current CPI</label>
                          </div>
                      </div>
                      <div className="row pt-4">
                          <div className="ff">
                              <input type="email" placeholder='' required= "not required"/>
                              <label   htmlFor="">Email</label>
                          </div>
                          <div className="ff">
                              <input type="tel" placeholder='' step="any" required />
                              <label   htmlFor="">Contact No.</label>
                          </div>
                      </div>
                      <div className="row">
                         <div className="ff roll">
                              <input type="text" placeholder='' required />
                              <label   htmlFor="">Roll Number</label>
                          </div>
                      </div>
                      <div className="btnProfile">
                           <button type="button" class="btn btn-outline-dark BPro">CONTINUE</button>
                      </div>
                  </div>
             </div>
        </>
    );
}


export default RegForm;