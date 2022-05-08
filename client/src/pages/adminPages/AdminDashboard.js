import AdminDashboardForm from "../../components/admin/AdminDashboardForm";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [adminData, setAdminData] = useState({});
  const [isLoading, setsILoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/a/dashboard`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setAdminData(res.data);
        setsILoading(false);
      });
  }, []);

  function updateAdminHandler(newAdminData) {
    console.log("going", newAdminData);
    axios({
      method: "post",
      url: `http://localhost:8000/a/dashboard`,
      withCredentials: true,
      data: { ...newAdminData },
    }).then((res) => {
      console.log(res);
      setAdminData(newAdminData);
    });
  }

  function startProcessHandler() {
    console.log("starting process @", new Date(Date.now()).toISOString());
    axios({
      method: "post",
      url: `http://localhost:8000/a/startProcess`,
      withCredentials: true,
      data: {},
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      {!isLoading ? (
        <>
          <h2 style={{ textAlign: "center" }}>Welcome ADMIN</h2>
          <AdminDashboardForm
            adminData={adminData}
            onUpdateAdminDetails={updateAdminHandler}
          />
          <button onClick={startProcessHandler} className="btn btn-success" >
            Start Process
          </button>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
