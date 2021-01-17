import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-left: 140px;
  background: rgb(9, 9, 121);
  background: linear-gradient(
    40deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
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
  margin-bottom: -40px;
  border: solid 2.5px #f2f1f4;
`;

export const UserInfo = styled.section`
  color: #f4f4f4;
  padding-top: 24px;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  padding-left: 140px;
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