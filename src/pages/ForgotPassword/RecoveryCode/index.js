import React, { useState } from "react";
import { withRouter } from "react-router";
import { RecoveredWrapper } from "./styles";
import { Spacer } from "../../../components/Spacer";
import Form from "../../../components/Form";
import Container from "../../../components/Container";

function RecoveryCode({ history, ...props }) {
  const [isRecovered, setIsRecovered] = useState(false);
  const sendRecoverCode = (event) => {
    // const { email, password } = event.target.elements;
    console.log("event", event);
    setIsRecovered(true);
  };

  return (
    <Container>
      {isRecovered ? (
        <RecoveredWrapper>
          <span>Usuário e senha recuperados com sucesso</span>
          <Spacer />
          <button onClick={() => history.push("/")}>
            Entrar na Plataforma
          </button>
        </RecoveredWrapper>
      ) : (
        <Form onSubmit={sendRecoverCode}>
          <label>
            Inserir nova senha
            <br />
            <input name="password" type="password" placeholder="******" />
          </label>
          <Spacer />
          <label>
            Código de Recuperação
            <br />
            <input name="code" type="number" placeholder="X5YT3AB" />
          </label>

          <Spacer />

          <button type="submit">Recuperar Senha</button>
        </Form>
      )}
    </Container>
  );
}

export default withRouter(RecoveryCode);
