import styled from "styled-components";

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  font-size: 1.2em;

  button {
    height: 45px;
    background-color: #2980b9;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 8px;
  }
`;

export const Investor = styled(BaseContainer)`
  background-color: #f3f3f3;
`;

export const Entrepreneur = styled(BaseContainer)`
  background-color: #eee;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  font-size: 1.2em;

  label {
    font-size: 1rem;
  }

  input {
    width: 100%;
    height: 60px;
    margin-top: 5px;
    border-radius: 8px;
    border: solid 0 #3c3c3c;
    padding: 10px;
  }

  button {
    height: 65px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;

    background: rgb(9,  9,  121);
        background: linear-gradient(
      
      40deg,
    
       rgba(9,  9,  121,  1) 0%,
    
       rgba(0,  212,  255,  1) 100%
    
    );
  }
`;
