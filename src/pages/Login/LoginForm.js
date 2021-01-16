import React from "react";
import { withRouter } from "react-router";
import { Form } from "./styles";
import { Spacer } from "../../components/Spacer";

function LoginForm({ history, ...props }) {
  return (
    <Form {...props}>
      <label>
        E-mail
        <br />
        <input name="email" type="email" placeholder="meu@email.com" />
      </label>

      <Spacer />

      <label>
        CPF
        <br />
        <input name="password" type="password" placeholder="******" />
      </label>

      <Spacer />

      <label onClick={() => history.push('/forgot-password')}>Esqueci minha senha</label>

      <button type="submit">Log in</button>
    </Form>
  );
}

export default withRouter(LoginForm);
