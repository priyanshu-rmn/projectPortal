import axios from "axios";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import {BiAlignRight, BiLogOut} from "react-icons/bi"


function Header() {
  const navigate = useNavigate();
  async function logoutHandler() {
    console.log("in");
    axios({
      method: 'post',
      url: 'http://localhost:8000/logout',
      data: {
      },
      withCredentials:true
    });
    console.log("out");
    navigate("/login");
  }

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo-container">
            <img src={require("../../images/logo.jpg")} alt="IIT-BHU-LOGO" />
          </div>
          <div className="text-container">
            <div className="heading">Project Portal
          
            <BiLogOut className="logout"  onClick={logoutHandler}></BiLogOut>
          </div>
            <div id="text-content">
              Indian Institute of Technology (Banaras Hindu University) Varanasi{" "}
            </div>
          </div>
          
          
        </div>
      </header>
    </>
  );
}
export default Header;
