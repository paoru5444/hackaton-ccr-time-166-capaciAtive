import React from "react";

import Form from "../../components/Form";
import Container from "../../components/Container";
import { Spacer } from "../../components/Spacer";
import { withRouter } from "react-router";

function ForgotPassword({ history }) {
  const sendForgotPassword = (event) => {
    try {
      // const { email, password } = event.target.elements;
      console.log("event", event);
      history.push("/recovery");
    } catch (error) {
      //
    }
  };
  return (
    <Container>
      <Form onSubmit={sendForgotPassword}>
        <h3>Recuperar Senha</h3>

        <Spacer />

        <label>
          E-mail
          <br />
          <input name="email" type="email" placeholder="meu@email.com" />
        </label>
        <Spacer />
        <label>
          CPF
          <br />
          <input name="cpf" placeholder="000.000.000-00" />
        </label>
        <Spacer />
        <button type="submit">Recuperar Senha</button>
      </Form>
    </Container>
  );
}

export default withRouter(ForgotPassword);
