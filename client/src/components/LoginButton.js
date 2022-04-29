import "./LoginButton.css";
import { FcGoogle } from "react-icons/fc";
function LoginButton() {
  return (
    <>
      <a href="http://localhost:8000/auth/google" class="button">
          <FcGoogle size="4rem" />
          <span class="button-label">Sign in with Google</span>
      </a>
    </>
  );
}
export default LoginButton;
