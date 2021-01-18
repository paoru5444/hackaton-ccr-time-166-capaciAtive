import React, { useEffect } from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";
import {Spacer} from "../../components/Spacer";
import { database } from "../../services/base";
import { Header, Avatar, UserInfo, Content, CardText } from "./styles";
import { withRouter } from "react-router";

export const Home = ({ history }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const cardItems = [
    {
      title: "Escola CapaciAtive",
      description:
        "Aprenda sobre Marketing Digital, empreendedorismo, e-commerce, administração e diversas outras soft & tech skils para fazer seu negócio decolar.",
      img: "https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/laptop-336704_1920.jpg?alt=media&token=17a02ff3-04ac-47d0-8d22-d9202dc80d25",
      link: "/school",
    },
    {
      title: "Fale com um Especialista",
      description:
        "Mentorias com empresários de sucesso do país para que você possa saber que caminhos tomar sempre que precisar.",
      img: "https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/21083306_121218878534329_6011407531680539755_o.jpg?alt=media&token=55c784f7-9b77-40b8-9975-2b9cbfc76ce3",
      link: "/experts",
    },
    {
      title: "Meu Negócio",
      description:
        "Agora que está tudo pronto, que tal solicitar acesso ao microcrédito ? Nosso pessoal vai analisar cada proposta com carinho. Esperamos que seja escolhido.",
      img: "https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/shutterstock_1667156749.jpg?alt=media&token=43fd53d6-c5c4-4be4-882a-13d41e88e6cc",
      link: "/business",
    },
  ];

  const fetchUser = () => {
    try {
      console.log("here");
      const usersRef = database().ref("users");
      usersRef.on("value", (snapshot) => {
        console.log("snapshot", snapshot.val());
      });

      console.log("database", usersRef);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Container style={{ justifyContent: "flex-start", flexDirection: "row " }}>
      <Header>
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/tcc-maps-241223.appspot.com/o/logo.png?alt=media&token=22c59740-91ea-4e52-b8a8-5c58b2f24dfe"
        />

        <Avatar src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />

        <Spacer />

        <UserInfo>
          <h4>Matheus Pereira</h4>
        </UserInfo>

        <Spacer size={64} />
        <ul>
          <li>Página Inicial</li>
          <li>Configurações</li>
          <li>Ajuda</li>
          <a href="controle_financeiro.xlsx" download="Controle Financeiro">
            <li>Planilha Organização Financeira</li>
          </a>
        </ul>

        <Spacer size={64} />
        <button>Sugestão de acessibilidade</button>
      </Header>

      <Spacer size={128} />

      <Content>
        {cardItems.map((item) => (
          <>
            <Card
              img={item.img}
              style={{ justifyContent: "flex-end" }}
              onClick={() => history.push(item.link)}
            >
              <img className="dashboard-img" src={item.img} />
              <CardText>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </CardText>
            </Card>

            <Spacer size={32} />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default withRouter(Home);
