import React, { useState } from "react";
import { withRouter } from "react-router";
import { Investor, Entrepreneur } from "./styles";
import Container from "../../components/Container";
import LoginForm from "./LoginForm";

const Login = ({ history }) => {
  const [showForm, setShowForm] = useState(null);

  const handleLogin = (route) => {
    history.push(route);
  }
  return (
    <Container style={{ flexDirection: "row" }}>
      <LoginForm onSubmit={() => handleLogin("/")} />
    </Container>
  );
};

export default withRouter(Login);
