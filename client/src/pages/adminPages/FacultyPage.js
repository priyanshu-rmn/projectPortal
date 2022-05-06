import { useEffect, useState } from "react";
import axios from "axios";
import FacultyCard from "../../components/admin/FacultyCard";
import SelectedStudentsCard from "../../components/proffs/SelectedStudentsCard";
import "./FacultyPage.css";

let prevId = null;
function FacultyPage() {
  const [faculties, setFaculties] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [expanded, toggleExpanded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/a/faculties`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("fetching faculty list...");
        console.log(res.data);
        setFaculties(res.data);
      });
  }, []);
  function getStudentListHandler(id) {
    axios
      .get(`http://localhost:8000/p/${id}/selectedStudents`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setSelectedStudents(res.data);
      });
    for (let f of faculties) {
      if (f._id === id) {
        setSelectedFaculty(f);
      }
    }

    if (prevId === id) {
      toggleExpanded((prevState) => {
        return !prevState;
      });
    }
    console.log(prevId, id);
    if (!prevId) {
      prevId = id;
    }
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="card-group">
        <div className="card out">
          <h4>List of Faculty</h4>
          {faculties.map((f) => (
            <FacultyCard
              key={f._id}
              faculty={f}
              getStudentList={getStudentListHandler}
            />
          ))}
        </div>
        {/* {expanded && ( */}
        <div className="card out ">
          <h4>
            Selected Students:{" "}
            {selectedFaculty &&
              selectedFaculty.fName + " " + selectedFaculty.lName}
          </h4>
          {selectedStudents.length !== 0 ? (
            selectedStudents.map((s) => (
              <SelectedStudentsCard key={s._id} studentDetails={s} />
            ))
          ) : (
            <>NO Students Selected</>
          )}
        </div>
      </div>
    </div>
  );
}

export default FacultyPage;
