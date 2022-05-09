import "./LoginButton.css";
import { FcGoogle } from "react-icons/fc";
function LoginButton() {
  return (
    <>
      <a href="http://localhost:8000/auth/google" className="button">
          <FcGoogle size="4rem" />
          <span className="button-label">Sign in with Google</span>
      </a>
    </>
  );
}
export default LoginButton;
