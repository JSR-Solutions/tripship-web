import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Local imports
import Home from "./Core/Home";
import Aboutus from "./Core/Aboutus";
import ContactUs from "./Core/ContactUs";
import AdminLogin from "./Admin/AdminLogin";
import CustomPackage from "./Core/CustomPackage";

import AdminRoute from "./Admin/AdminRoute";
import AdminDashboard from "./Admin/AdminDashboard";
import AllPackages from "./Admin/AllPackages";
import AddPackage from "./Admin/AddPackage";
import CallbackRequests from "./Admin/CallbackRequests";
import CustomPackageRequests from "./Admin/CustomPackageRequests";
import EditPackage from "./Admin/EditPackage";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import UserRegistration from "./Auth/UserRegistration";
import AllUsers from "./Admin/AllUsers";
import EditUserDetails from "./Auth/EditUserDetails";
import UserDashboard from "./Core/UserDashboard";
import Singlepackage from "./Core/Singlepackagescreen/Singlepackage";
import CategoryScreen from "./Core/CategoryScreen";
import AllReviews from "./Admin/AllReviews";
import AddReview from "./Admin/AddReview";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/custom-package" exact component={CustomPackage} />
          <Route path="/admin/login" exact component={AdminLogin} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/packages/:category" exact component={CategoryScreen} />
          <Route
            path="/packages/:category/:packageId"
            exact
            component={Singlepackage}
          />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/register" exact component={UserRegistration} />
          <Route path="/user/editprofile" exact component={EditUserDetails} />
          <Route path="/user" exact component={UserDashboard} />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
          <AdminRoute path="/admin/allpackages" exact component={AllPackages} />
          <AdminRoute path="/admin/addpackage" exact component={AddPackage} />
          <AdminRoute
            path="/admin/callback"
            exact
            component={CallbackRequests}
          />
          <AdminRoute path="/admin/reviews" exact component={AllReviews} />
          <AdminRoute path="/admin/reviews/add" exact component={AddReview} />
          <AdminRoute
            path="/admin/customrequests"
            exact
            component={CustomPackageRequests}
          />
          <AdminRoute
            path="/admin/edit/:packageType/:packageId"
            exact
            component={EditPackage}
          />
          <AdminRoute path="/admin/users" exact component={AllUsers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
