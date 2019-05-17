import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import AddGames from "./pages/AddGames";
import Auth from './utils/Auth';
import Login from "./pages/Login";
import Logout from "./components/Logout";
import SignUp from "./pages/SignUp";



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Books} />
        {/* <Route exact path="/AddGames"component={AddGames} /> */}
        <PrivateRoute exact path="/protected" component={AddGames} />
        <Route exact path="/AddGames" component={AddGames} />

        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
