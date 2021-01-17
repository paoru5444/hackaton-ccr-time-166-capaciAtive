import React from "react";
import Container from "../../components/Container";
import { Spacer } from "../../components/Spacer";
import {
  Header,
  InfoSection,
  CardsSection,
  WellcomeCard,
  NextArea,
  CardsRow,
  Content,
} from "./styles";
import { withRouter } from "react-router";
function WellcomePage({ history }) {
  return (
    <Container style={{ justifyContent: "flex-start" }}>
      <Header>
        <img src="https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/logo.png?alt=media&token=22c59740-91ea-4e52-b8a8-5c58b2f24dfe" />

        <ul>
          <li>Sobre Nós</li>
          <li>Nossos Parceiros</li>
          <li>Nossos Cases</li>
          <li>Ajuda</li>
        </ul>
      </Header>

      <Spacer size={64} />

      <Content>
        <InfoSection>
          <h1>
            Olá, seja
            <br />
            bem vindo!
          </h1>

          <span>
            Está é a plataforma do CapaciAtive! Queremos transformar o negócio
            PCD através da educação e investimento. Para começar, caso
            necessite, selecione ao lado uma versão especial do site feita para
            que você possa navegar com a melhor experiência possível.
          </span>
        </InfoSection>

        <CardsSection>
          <CardsRow>
            <WellcomeCard>
              <img src="https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/brightness-control.png?alt=media&token=13aa3fce-cf4b-491b-ad89-c704f948a5ba" />
              <h2>Baixa Visibilidade</h2>
              <span>
                É necessário zoom para que eu consiga efetuar a leitura
                corretamente
              </span>
            </WellcomeCard>

            <WellcomeCard>
              <img src="https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/ear.png?alt=media&token=eab4ade1-85ed-4b6b-a508-8a5da1e2638c" />
              <h2>Suporte a Narrador</h2>
              <span>Preciso que o conteúdo da tela seja narrado para mim.</span>
            </WellcomeCard>
          </CardsRow>
          <Spacer size={64} />
          <NextArea>
            <span>Não preciso de opções especiais</span>
            <Spacer size={4} />
            <button onClick={() => history.push("/login")}>Avançar</button>
          </NextArea>
        </CardsSection>

        <img
          className="background"
          src="https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/546504751-vector-%5BConvertido%5D.png?alt=media&token=8c87fc80-6557-4bce-bc58-df4f8ded5eb2"
        />
      </Content>
    </Container>
  );
}

export default withRouter(WellcomePage);
