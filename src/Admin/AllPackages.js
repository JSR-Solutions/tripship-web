import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { DataGrid } from "@material-ui/data-grid";
import AdminSidebar from "./AdminSidebar";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function AllPackages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages("Backpacking Trips");
  }, []);

  const [packageType, setPackageType] = useState("Backpacking Trips");

  // Package type change handling
  function handleTypeChange(event) {
    setPackageType(event.target.value);
    console.log(event.target.value);
    getPackages(event.target.value);
  }

  const [isLoading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "Package ID", width: 280 },
    { field: "packageName", headerName: "Package name", width: 320 },
    { field: "packageDuration", headerName: "Package Duration", width: 200 },
    {
      field: "packageCost",
      headerName: "Package Cost",
      type: "number",
      width: 200,
    },
    {
      field: "packageType",
      headerName: "Package Type",
      sortable: true,
      width: 260,
    },
  ];

  function getPackages(packageType) {
    const db = firebase.firestore();
    setPackages([]);
    setLoading(true);
    db.collection(packageType)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          console.log(querySnapshot.docs.length !== 0);
          querySnapshot.docs.forEach((doc) => {
            console.log(doc.data());
            if (doc.data) {
              setPackages((prev) => {
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

  const rows = packages.map((pckg) => {
    return {
      id: pckg.packageId,
      packageName: pckg.name,
      packageDuration: pckg.duration,
      packageCost: pckg.pricing[0].cost,
      packageType: pckg.packageType,
    };
  });

  const [redirectPath, setRedirectPath] = useState("");
  const [redirect, setRedirect] = useState(false);

  const redirectToSingle = (row) => {
    console.log(row.data);
    setRedirectPath("/admin/edit/" + row.data.packageType + "/" + row.data.id);
    setRedirect(true);
  };

  return (
    <div>
      {redirect ? <Redirect to={redirectPath} /> : null}
      <AdminSidebar />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the All Packages section.</h2>
        <p>
          Click on any package of your choice to visit the package dashboard.
        </p>
        <div className="admin-dashboard-content-div">
          <Form.Group controlId="package-type">
            <Form.Control
              onChange={handleTypeChange}
              as="select"
              name="package-type"
              value={packageType}
            >
              <option>Treks</option>
              <option>Backpacking Trips</option>
              <option>Bike Trips</option>
            </Form.Control>
          </Form.Group>
          {packages && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                loading={isLoading}
                rowCount={packages.length}
                rowsPerPageOptions={[5, 10, 15]}
                rows={rows}
                columns={columns}
                pageSize={10}
                onRowSelected={redirectToSingle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllPackages;
