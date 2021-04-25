import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";
import { BiEditAlt } from "react-icons/bi";
import { ImUsers } from "react-icons/im";

//Local imports
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <div>
      <Menu>
        <h3 className="admin-sidebar-title">TripShrip</h3>
        <hr className="admin-sidebar-divider" />
        <Link className="admin-sidebar-link" to="/admin/dashboard">
          <RiDashboardFill className="admin-sidebar-icon" />
          Dashboard
        </Link>
        <Link className="admin-sidebar-link" to="/admin/allpackages">
          <GoPackage className="admin-sidebar-icon" />
          All Packages
        </Link>
        <Link className="admin-sidebar-link" to="/admin/addpackage">
          <FiPackage className="admin-sidebar-icon" />
          Add Package
        </Link>
        <Link className="admin-sidebar-link" to="/admin/callback">
          <VscCallOutgoing className="admin-sidebar-icon" />
          Callback Requests
        </Link>
        <Link className="admin-sidebar-link" to="/admin/customrequests">
          <BiEditAlt className="admin-sidebar-icon" />
          Custom Requests
        </Link>
        <Link className="admin-sidebar-link" to="/admin/users">
          <ImUsers className="admin-sidebar-icon" />
          All Users
        </Link>
      </Menu>
    </div>
  );
}

export default AdminSidebar;
