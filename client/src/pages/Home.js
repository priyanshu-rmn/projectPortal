import {Link} from 'react-router-dom'
function Home() {
  console.log("HOme");
  return (
    <>
      <p>HOME</p>
      <Link to="/login">login</Link>
    </>
  );
}
export default Home;
