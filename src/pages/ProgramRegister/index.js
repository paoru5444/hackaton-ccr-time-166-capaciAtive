import React, { useState } from "react";

import { Form } from "../Login/styles";
import Container from "../../components/Container";
import { Spacer } from "../../components/Spacer";
import { withRouter } from "react-router";
import { Content, InfoArea } from "./styles";

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
        <Content>
          <InfoArea>
            <h1>
              Agradecemos o interesse em querer fazer parte disso!
            </h1>
            <br />
            <span>
              São necessários alguns documentos e uma validação manual para podermos autorizar o ingresso e te adicionar no sistema de seleção. Garanta que você já têm em mãos os seguintes documentos: <br /><br /> 1. Certificado Internacional de Doenças (CID) em seu nome, assinado por um médico com CRM ativo.<br /><br /> 2. Comprovante de endereço atualizado em seu nome ou de parentes. <br /><br /> 3. Carteira de Identidade em formato PDF. É necessário ter um e-mail e/ou telefone ativos, pois entraremos em contato em breve.
            </span>
          </InfoArea>

          <Form style={{ width: '49%' }} onSubmit={registerInProgram}>
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
        </Content>
      ) : (
        <div>Parece que não pudemos selecionar você para o programa.</div>
      )}
    </Container>
  );
}

export default withRouter(ProgramRegister);
