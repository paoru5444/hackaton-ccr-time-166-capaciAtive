import styled from "styled-components";

export const PageCard = styled.div`
  width: 400px;
  height: 437px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  
  border: solid 0 #3c3c3c;
  background: rgba(0,198,255);
  background: linear-gradient(180deg, rgba(0,198,255, 0.7) 0%, rgba(0,114,255, 0.7) 100%);

  .dashboard-img {
    position: absolute;
    width: 400px;
    height: 437px;
    object-fit: cover;
    z-index: -999;
    border-radius: 12px;
  }
`;
