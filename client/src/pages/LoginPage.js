import LoginButton from "../components/LoginButton";
import Header from "../components/layout/Header";
import './LoginPage.css'
function LoginPage() {
  return (
    <>
      <Header />
      <section>
        <div>
          <LoginButton />
        </div>
      </section>
    </>
  );
}
export default LoginPage;
