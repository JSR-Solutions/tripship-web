import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

//Local imports
import "./AdminSidebar.css";

function AdminSidebar() {
  return <div>
      <Menu>
          <Link className="admin-sidebar-link" to="/admin/dashboard">Dashboard</Link>
          <Link className="admin-sidebar-link" to="/admin/allpackages">All Packages</Link>
          <Link className="admin-sidebar-link" to="/admin/addpackage">Add Package</Link>
          <Link className="admin-sidebar-link" to="/admin/callback">Callback Requests</Link>
          <Link className="admin-sidebar-link" to="/admin/customrequests">Custom Requests</Link>
      </Menu>
  </div>;
}

export default AdminSidebar;
