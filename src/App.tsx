import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Home} /> {/* Default route */}
      </Switch>
    </Router>
  );
};

export default App;
