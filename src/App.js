import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Typography, Button } from "@material-ui/core";
import DashBoard from "./screens/dashboard/DashBoard";
import FeedsPosters from "./screens/feeds/FeedsPosters";
import MemberShip from "./screens/membership/MemberShip";
import Login from "./screens/login/login.screen";

function App() {
  const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Typography variant="h5" align="left">
            <Link to="/" className="logo">
              {" "}
              MQI Admin{" "}
            </Link>
          </Typography>
          {isLogged?.isLogin && (
            <Button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                return window.location.reload();
              }}
            >
              <Typography className="logo">Logout</Typography>
            </Button>
          )}
        </header>

        <Switch>
          <Route exact path="/">
            {isLogged?.user ? (
              <Redirect exact to="/dashboard" />
            ) : (
              <Redirect exact to="/login" />
            )}
          </Route>
          <Route path="/login">
            {isLogged?.user ? <Redirect exact to="/dashboard" /> : <Login />}
          </Route>
          <PrivateRoute path="/dashboard" isLogged={isLogged?.user}>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path="/feeds" isLogged={isLogged?.user}>
            <FeedsPosters />
          </PrivateRoute>
          <PrivateRoute path="/membership" isLogged={isLogged?.user}>
            <MemberShip />
          </PrivateRoute>
          <Route
            path="*"
            component={() => <Typography>404 PAge Not Found</Typography>}
          />
        </Switch>
      </Router>
    </div>
  );
}

function PrivateRoute({ children, isLogged, ...rest }) {
  return (
    <Route
      exact
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
