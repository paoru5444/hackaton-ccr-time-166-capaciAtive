import React from "react";
import { withRouter } from "react-router";
import { ContainerMenu, Menu, Content } from "./styles";

function DesktopLayout({ history, children }) {
  return (
    <ContainerMenu>
      <Menu>
        <ul>
          <li onClick={() => history.push("/")}>Inicio</li>
          <li onClick={() => history.push("/school")}>Escola</li>
          <li onClick={() => history.push("/experts")}>Especialistas</li>
          <li onClick={() => history.push("/business")}>Meu negócio</li>
        </ul>
      </Menu>

      <Content>{children}</Content>
    </ContainerMenu>
  );
}

export default withRouter(DesktopLayout);
