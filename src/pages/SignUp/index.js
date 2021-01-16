import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../services/base";
import { Form } from "../Login/styles";
import Container from "../../components/Container";
import { Spacer } from "../../components/Spacer";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>

        <Spacer />

        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>

        <Spacer />
        
        <button type="submit">Sign Up</button>
      </Form>
    </Container>
  );
};

export default withRouter(SignUp);
