import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import AddGames from "./pages/AddGames";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Books} />
        <Route exact path="/AddGames"component={AddGames} />
      </div>
    </Router>
  );
}

export default App;
