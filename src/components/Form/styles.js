import styled from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  font-size: 1.2em;

  label {
    font-size: 1rem;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    border-radius: 8px;
    border: solid 1px #3c3c3c;
  }

  button {
    height: 45px;
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
