import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";
import {Spacer} from "../../components/Spacer";
import { database } from "../../services/base";
import { Header, Avatar, UserInfo, Content, IconsWrapper, HeaderItem } from "./styles";
import { withRouter } from "react-router";
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
export const Home = ({ history }) => {
  const [isRegistered, setIsRegistered] = useState(false );

  useEffect(() => {
    checkUserRegistered()
    fetchUser();
  }, []);

  const checkUserRegistered = () => {
    if (isRegistered) {
      history.push('/program-register')
    }
  }

  const cardItems = [
    { title: 'Escola', icon: '', link: '/school'},
    { title: 'Especialistas', icon: '', link: '/experts'},
    { title: 'Meu Negócio', icon: '', link: '/business'},
  ]

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
    <Container style={{ justifyContent: 'flex-start' }}>
      <Header>
        <HeaderItem>
          <Avatar
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />

          <Spacer />
          
          <UserInfo>
            <h4>Matheus Pereira</h4>
            <h4>Lorem Ipsum</h4>
          </UserInfo>
        </HeaderItem>

        <IconsWrapper>
          <FontAwesome
            name='bell'
            color='white'
            size={30}
          />

<FontAwesome
            name='bell'
            color='white'
            size={30}
          />

<FontAwesome
            name='bell'
            color='white'
            size={30}
          />
        </IconsWrapper>
      </Header>

      <Spacer size={128} />

      <Content>
        {cardItems.map((item) => (
          <>
            <Card onClick={() => history.push(item.link)}>
              <span>{item.title}</span>
            </Card>

            <Spacer size={32} />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default withRouter(Home);
