import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 75px;
  padding-right: 75px;
  img {
    width: 449px;
    height: 215px;
    object-fit: cover;
  }

  ul {
    display: flex;
    padding-top: 16px;
    padding-right: 16px;
    li {
      height: 50px;
      list-style-type: none;
      padding: 16px;
      border-radius: 12px;
      color: #0073ff;
      font-weight: bold;
    }

    li:hover {
      background-color: #0073ff;
      color: #fff;
    }
  }
`;

export const InfoSection = styled.section`
  width: 30%;
  padding-left: 32px;
  h1 {
    font-size: 54px;
    font-weight: bolder;
    color: #0072ff;
  }

  span {
    font-size: 20px;
    color: #0072ff;
  }
`;

export const CardsSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1 {
    font-size: 54px;
    font-weight: bolder;
    color: #0072ff;
  }

  span {
    font-size: 20px;
    color: #0072ff;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .background {
    position: absolute;
    top: 520px;
    left: 200px;
  }
`;

export const WellcomeCard = styled.section`
  width: 322px;
  height: 174px;
  background: transparent linear-gradient(180deg, #00c6ff 0%, #0072ff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 12px;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  padding: 16px;
  h2 {
    font-size: 19px;
    color: #fff;
    font-weight: bolder;
  }

  span {
    font-size: 12px;
    color: #fff;
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
  }
`;

export const CardsRow = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 15px;
    color: #3c3c3c;
  }

  button {
    color: #fff;
    width: 171px;
    height: 65px;
    background: transparent linear-gradient(180deg, #00c6ff 0%, #0072ff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 33px;
    border: none;
  }
`;
