import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Entrepreneur from "./pages/Entrepreneur";
import Investor from "./pages/Investor";
import ForgotPassword from "./pages/ForgotPassword";
import RecoveryCode from "./pages/ForgotPassword/RecoveryCode";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/entrepreneur" component={Entrepreneur} />
        <Route exact path="/investor" component={Investor} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/recovery" component={RecoveryCode} />
      </div>
    </Router>
  );
};

export default App;