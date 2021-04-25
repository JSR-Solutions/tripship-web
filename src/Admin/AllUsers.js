import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { DataGrid } from "@material-ui/data-grid";
import AdminSidebar from "./AdminSidebar";

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "User ID", width: 280 },
    { field: "name", headerName: "User Name", width: 220 },
    { field: "phone", headerName: "User Phone Number", width: 200 },
    { field: "email", headerName: "User Email", width: 260 },
    {
      field: "address",
      headerName: "User Address",
      width: 300,
    },
  ];

  function getUsers() {
    const db = firebase.firestore();
    setUsers([]);
    setLoading(true);
    db.collection("Users")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          console.log(querySnapshot.docs.length !== 0);
          querySnapshot.docs.forEach((doc) => {
            console.log(doc.data());
            if (doc.data) {
              setUsers((prev) => {
                return [...prev, doc.data()];
              });
              setLoading(false);
            }
          });
        } else {
          setLoading(false);
        }
      });
  }

  const rows = users.map((user) => {
    return {
      id: user.uid,
      name: user.name,
      phone: user.phone,
      email: user.email,
      address: user.address,
    };
  });

  return (
    <div>
      <AdminSidebar />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the All Users section.</h2>
        <p>Here is data of all the users registered on your website.</p>
        <div className="admin-dashboard-content-div">
          {users && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                loading={isLoading}
                rowCount={users.length}
                rowsPerPageOptions={[5, 10, 15]}
                rows={rows}
                columns={columns}
                pageSize={10}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
