import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./componets/Auth";
import Home from "./componets/Home";
import Login from "./componets/Login";
import PrivateRoute from "./componets/PrivateRoute";
import SignUp from "./componets/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <main>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </main>
      </Router>
    </AuthProvider>
  );
};

export default App;
