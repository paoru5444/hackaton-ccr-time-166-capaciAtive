import React, { useState } from "react";
import { withRouter } from "react-router";
import { Investor, Entrepreneur } from "./styles";
import Container from "../../components/Container";
import LoginForm from "./LoginForm";

const Login = ({ history }) => {
  const [showForm, setShowForm] = useState(null);

  const handleLogin = (route) => {
    history.push(route);
  }
  return (
    <Container style={{ flexDirection: 'row' }}>
      <Entrepreneur>
        {showForm !== 0 && (
          <button onClick={() => setShowForm(0)}>
            Sou Empreendedor
          </button>
        )}

        {showForm === 0 && (
          <LoginForm onSubmit={() => handleLogin('/entrepreneur')} />
        )}
      </Entrepreneur>

      <Investor>
        {showForm !== 1 && (
          <button onClick={() => setShowForm(1)}>
            Sou Investidor
          </button>
        )}

        {showForm === 1 && (
          <LoginForm onSubmit={() => handleLogin('/investor')} />
        )}
      </Investor>
      
    </Container>
  );
};

export default withRouter(Login);
