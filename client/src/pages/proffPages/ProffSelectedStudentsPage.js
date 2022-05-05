import axios from "axios";
import { useState ,useEffect,useContext} from "react";
import SelectedStudentsCard from "../../components/proffs/SelectedStudentsCard";
import { UserContext } from "../../UserContext";


export default function ProffSelectedStudentsPage() {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const userObject = useContext(UserContext);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/p/${userObject._id}/selectedStudents`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setSelectedStudents(res.data);
      });
  }, [userObject]);
  return (
    <>
      {selectedStudents.map((s) => (
          <SelectedStudentsCard key={ s._id} studentDetails={s} />
      ))}
    </>
  );
}
