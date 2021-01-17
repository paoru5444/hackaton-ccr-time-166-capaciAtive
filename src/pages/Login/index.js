import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Investor, Entrepreneur } from "./styles";
import Container from "../../components/Container";
import LoginForm from "./LoginForm";

const Login = ({ history }) => {
  const [showForm, setShowForm] = useState(null);
  // const [isRegistered, setIsRegistered] = useState(false);

  // useEffect(() => {
  //   checkUserRegistered()
  // }, []);

  // const checkUserRegistered = () => {
  //   if (!isRegistered) {
  //     history.push('/program-register')
  //   }
  // }
  const handleLogin = (route) => {
    history.push(route);
  }
  return (
    <Container style={{ flexDirection: "row" }}>
      <LoginForm onSubmit={() => history.push('/program-register')} />
    </Container>
  );
};

export default withRouter(Login);
