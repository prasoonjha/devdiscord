import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import PrivateRoute from "./components/routing/privateRoute";
import NavBar from "./components/layout/navbar.jsx";
import Alert from "./components/layout/alert";
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/register.jsx";
import Dashboard from "./components/dashboard/dashboard";
import CreateProfile from "./components/profile-forms/createProfile";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="App">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
export default App;
