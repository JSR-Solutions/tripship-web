import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Local imports
import Home from "./Core/Home";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Aboutus from "./Core/Aboutus";
import ContactUs from "./Core/ContactUs";
import AdminLogin from "./Admin/AdminLogin";

import AdminRoute from "./Admin/AdminRoute";
import AdminDashboard from "./Admin/AdminDashboard";


function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/admin/login" exact component={AdminLogin} />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
