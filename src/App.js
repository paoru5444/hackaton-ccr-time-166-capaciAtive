import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Entrepreneur from "./pages/Entrepreneur";
import Investor from "./pages/Investor";
import ForgotPassword from "./pages/ForgotPassword";
import RecoveryCode from "./pages/ForgotPassword/RecoveryCode";
import Business from "./pages/Business";
import School from "./pages/School";
import Experts from "./pages/Experts";
import ProgramRegister from "./pages/ProgramRegister";

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
        <Route exact path="/school" component={School} />
        <Route exact path="/experts" component={Experts} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/program-register" component={ProgramRegister} />
      </div>
      <GlobalStyle />
    </Router>
  );
};

export default App;