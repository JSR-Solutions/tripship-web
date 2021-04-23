import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Core/Home";
import Aboutus from "./Core/Aboutus";


function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
