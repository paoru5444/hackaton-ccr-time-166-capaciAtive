import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100vh;
  align-items: center;
  padding-top: 32px;
  background-color: #fff;

  .logo {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  ul {
    width: 100%;

    li {
      list-style-type: none;
      padding: 32px;
    }

    li:hover {
      background-color: #eee;
    }
  }

  button {
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 16px;
    background: rgb(0,  198,  255);
    background: linear-gradient(
      
      90deg,

           rgba(0,  198,  255,  1) 0%,
     
      rgba(0,  114,  255,  1) 100%
    
    );
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: solid 2.5px #f2f1f4;
`;

export const UserInfo = styled.section`
  color: #0078ff;
  font-size: 28px;
  font-weight: bold;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
`;

export const PageCard = styled.div`
  width: 356px;
  height: 356px;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  -webkit-box-shadow: 2px 2px 16px -5px rgba(60, 60, 60, 0.5);
  -moz-box-shadow: 2px 2px 16px -5px rgba(60, 60, 60, 0.5);
  box-shadow: 2px 2px 16px -5px rgba(60, 60, 60, 0.5);
`;

export const IconsWrapper = styled.div`
  width: 20%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  color: #fff;

  h3 {
    font-size: 23px;
    letter-spacing: 0px;
    font-weight: bolder;
  }

  span {
    font-size: 15px;
    letter-spacing: 0px;
    color: #ffffff;
    margin-bottom: 64px;
    margin-top: 32px;
  }
`;