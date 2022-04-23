import "./LoginButton.css";
import { FcGoogle } from "react-icons/fc";
function LoginButton() {
  return (
    <>
      <a href="/auth/google" class="button">
          <FcGoogle size="4rem" />
          <span class="button-label">Sign in with Google</span>
      </a>
    </>
  );
}
export default LoginButton;
