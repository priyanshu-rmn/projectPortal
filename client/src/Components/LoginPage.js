import React from 'react';
import './LoginPage.css';
function LoginPage(){
    return(
        <>
             <div className="loginbg">
                 <div className="button">
                      <button type="button" class="btn btn-primary btn-lg logbtn"><img className = "btn-logo" src="/Google.png" alt="" /> Sign in with Google</button>
                 </div>
             
             </div>
        </>

    );
}


export default LoginPage;