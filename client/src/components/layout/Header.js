import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo-container">
            <img src={require("../../images/logo.jpg")} alt="IIT-BHU-LOGO" />
          </div>
          <div className="text-container">
            <div id="heading">Project Portal</div>
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
