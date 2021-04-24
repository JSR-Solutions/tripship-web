import React from 'react'
import AdminSidebar from './AdminSidebar';

function AddPackage() {
    return (
      <div>
        <AdminSidebar />
        <div className="admin-dashboard-main-div">
          <h2>Hello, Admin! Welcome to the Add Packages section.</h2>
          <p>Please fill all the required fields below to add the package to the website.</p></div>
      </div>
    );
}

export default AddPackage
