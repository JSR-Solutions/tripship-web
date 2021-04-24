import React from 'react'
import AdminSidebar from './AdminSidebar';

function CallbackRequests() {
    return (
      <div>
        <AdminSidebar />
        <div className="admin-dashboard-main-div">
          <h2>Hello, Admin! Welcome to the Callback Requests section.</h2>
          <p>Please check all the callback requests generated on your website.</p></div>
      </div>
    );
}

export default CallbackRequests
