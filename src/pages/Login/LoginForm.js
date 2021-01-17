import React from "react";
import { withRouter } from "react-router";
import { Form } from "./styles";
import { Spacer } from "../../components/Spacer";

const logo = require("../../assets/logo.png");

function LoginForm({ history, ...props }) {
  return (
    <Form {...props}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/logo.png?alt=media&token=22c59740-91ea-4e52-b8a8-5c58b2f24dfe"
        style={{
          width: 500,
          alignSelf: "center",
        }}
      />
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

      <label onClick={() => history.push("/forgot-password")}>
        Esqueci minha senha
      </label>

      <Spacer />

      <button type="submit">Entrar na Plataforma</button>

      <Spacer />
      
      <button className="outlined" onClick={() => history.push("/signup")}>
        Criar Conta
      </button>

      <Spacer />
      
      <button className="outlined" onClick={() => history.push("/signup")}>
        Entrar como Investidor
      </button>
    </Form>
  );
}

export default withRouter(LoginForm);
