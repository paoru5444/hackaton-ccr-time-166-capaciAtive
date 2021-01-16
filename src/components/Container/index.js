import React from "react";

import { ContainerWrapper } from "./styles";

function Container({ children, ...props }) {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
}

export default Container;
