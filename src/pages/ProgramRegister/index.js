import React, { useState } from "react";

import { Form } from "../Login/styles";
import Container from "../../components/Container";
import { Spacer } from "../../components/Spacer";
import { withRouter } from "react-router";

function ProgramRegister({ history }) {
  const [isAlowed, setIsAlowed] = useState(true);

  const registerInProgram = (event) => {
    try {
      // const { email, password } = event.target.elements;
      setIsAlowed(Math.floor(Math.random() * 10) % 2 === 0);
      if (isAlowed) {
        history.push("/");
      }
    } catch (error) {
      //
    }
  };

  return (
    <Container>
      {isAlowed ? (
        <>
          <h1>Formulário de inscrição</h1>

          <Spacer />

          <Form onSubmit={registerInProgram}>
            <label>
              Nome Completo
              <input
                name="name"
                type="text"
                placeholder="ex: Peterson Ricardo Pereira"
              />
            </label>

            <Spacer />

            <label>
              Documento de Identidade
              <input name="id" type="file" placeholder="Identidade" />
            </label>

            <Spacer />

            <label>
              Comprovante de Residência
              <input name="address" type="file" placeholder="Documento" />
            </label>

            <Spacer />

            <label>
              Láudo Médico
              <input
                name="medical_document"
                type="file"
                placeholder="Documento"
              />
            </label>

            <Spacer />

            <label>
              Data de nascimento
              <input
                name="data_nascimento"
                type="date"
                placeholder="13/01/1998"
              />
            </label>

            <Spacer />

            <label>
              Qual é a sua ideia de empreendimento?
              <input name="text" placeholder="" />
            </label>

            <Spacer />

            <button type="submit">Cadastrar</button>
          </Form>
        </>
      ) : (
        <div>Parece que não pudemos selecionar você para o programa.</div>
      )}
    </Container>
  );
}

export default withRouter(ProgramRegister);
