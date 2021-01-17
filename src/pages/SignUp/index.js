import React from "react";
import { withRouter } from "react-router";
import { Form } from "../Login/styles";
import Container from "../../components/Container";
import { Spacer } from "../../components/Spacer";

const SignUp = ({ history }) => {
  const sendSignUp = (event) => {
    try {
      // const { email, password } = event.target.elements;
      console.log("event", event);
    } catch (error) {
      //
    }
  };

  return (
    <Container>
      <h1>Cadastre-se</h1>

      <Spacer />

      <Form onSubmit={sendSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>

        <Spacer />

        <label>
          Senha
          <input name="password" type="password" placeholder="Password" />
        </label>

        <Spacer />

        <label>
          Data de nascimento
          <input name="data_nascimento" type="date" placeholder="13/01/1998" />
        </label>

        <Spacer />

        <label>
          CPF
          <input name="cpf" placeholder="CPF" />
        </label>

        <Spacer />

        <label>
          Informações sobre a deficiência
          <input name="pcd_info" placeholder="Informações" />
        </label>

        <Spacer />

        <label>
          SID
          <input name="sid" placeholder="Exemple SID" />
        </label>

        <Spacer />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default withRouter(SignUp);
