import { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { UserContext } from "./UserContext";
const ProtectedRoute = ({Component}) => {

    const userObject = useContext(UserContext);
    console.log("protected route : ", userObject);
    return !Object.keys(userObject).length ? <Component/> : <Navigate to="/" />;

}

export default ProtectedRoute;
