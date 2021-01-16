import React from "react";

import { Form } from "./styles";
import { Spacer } from "../../components/Spacer";

function LoginForm({ ...props }) {
  return (
    <Form {...props}>
      <label>
        E-mail
        <br />
        <input name="email" type="email" placeholder="Email" />
      </label>

      <Spacer />

      <label>
        Senha
        <br />
        <input name="password" type="password" placeholder="Password" />
      </label>

      <Spacer />

      <button type="submit">Log in</button>
    </Form>
  );
}

export default LoginForm;
