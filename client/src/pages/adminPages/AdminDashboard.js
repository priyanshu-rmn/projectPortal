import AdminDashboardForm from "../../components/admin/AdminDashboardForm";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";

export default function AdminDashboard() {
  const adminObject = useContext(AdminContext);
  console.log("adminObject", adminObject);

  function updateAdminHandler(newAdminData) {
    console.log("going", newAdminData);
    axios({
      method: "post",
      url: `http://localhost:8000/a/dashboard`,
      withCredentials: true,
      data: { ...newAdminData },
    }).then((res) => {
      console.log("response updateadminhandler");
      console.log(res);
      adminObject.setAdminObject(res.data);
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
      adminObject.setAdminObject(res.data);
    });
  }

  // function randomAllocationHandler() {
  //   axios({
  //     method: "post",
  //     url: `http://localhost:8000/a/randomAllocation`,
  //     withCredentials: true,
  //     data: {},
  //   }).then((res) => {
  //     console.log(res);
  //   });

  // window.location.reload();
  // }

  function resetProcessHandler() {
    console.log("REsetting process client");
    axios({
      method: "post",
      url: `http://localhost:8000/a/resetProcess`,
      withCredentials: true,
      data: {},
    }).then((res) => {
      console.log(res, "DONE");
    });
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Welcome ADMIN</h2>
      <AdminDashboardForm
        adminData={adminObject}
        onUpdateAdminDetails={updateAdminHandler}
      />
      {console.log("checking")}
      <button
        onClick={startProcessHandler}
        className="btn btn-success"
        disabled={adminObject.processStage !== 0}
      >
        Start Process
      </button>
      {/* <button
        onClick={randomAllocationHandler}
        className="btn btn-success"
        disabled={adminObject.processStage <=2}
      >
        Random Allocator
      </button> */}
      <button
        onClick={resetProcessHandler}
        className="btn btn-success"
        disabled={adminObject.processStage !== 0}
      >
        RESET
      </button>
    </>
  );
}
