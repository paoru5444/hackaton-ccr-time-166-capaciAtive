import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 32px;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.section``;

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
