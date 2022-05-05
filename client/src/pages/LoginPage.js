import LoginButton from "../components/LoginButton";
import './LoginPage.css'
function LoginPage({setIsLoggedIn}) {
  setIsLoggedIn(false);
  return (
    <>
      <section>
        <div>
          <LoginButton />
        </div>
      </section>
    </>
  );
}
export default LoginPage;
