import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Core/Home";

import Header from './Components/Header'
import Footer from './Components/Footer'
import Aboutus from "./Core/Aboutus";


function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
