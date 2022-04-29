import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});
function UserContextProvider(props) {
    const [userObject, setUserObject] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/getUser", { withCredentials: true })
      .then((res) => {
          if (res.data) {
              console.log(res);
          setUserObject(res.data);
        }
      });
  }, []);
  return (
    <UserContext.Provider value={userObject}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
