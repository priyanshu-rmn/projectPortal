import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ProffProfilePageForm from "../../components/proffs/ProffProfilePageForm";

function ProffProfilePage() {
  const userObject = useContext(UserContext);
  console.log(userObject);

  const [proffData, setProffData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/p/${userObject._id}/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setProffData(res.data);
      });
  },[userObject]);

  function updateProffHandler(newProffData) {
    console.log("going", newProffData);
    axios({
      method: "post",
      url: `http://localhost:8000/p/${userObject._id}/profile`,
      withCredentials: true,
      data: { ...newProffData },
    }).then((res) => {
      console.log(res);
      setProffData(newProffData);
    });
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Welcome {userObject.username}</h2>

      <ProffProfilePageForm
        user={proffData}
        onUpdateProff={updateProffHandler}
      />
    </>
  );
}

export default ProffProfilePage;
