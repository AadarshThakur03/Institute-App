import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;
