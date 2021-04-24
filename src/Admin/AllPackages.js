import React from "react";
import AdminSidebar from "./AdminSidebar";

function AllPackages() {
  return (
    <div>
      <AdminSidebar />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the All Packages section.</h2>
        <p>Click on any package of your choice to visit the package dashboard.</p></div>
    </div>
  );
}

export default AllPackages;
