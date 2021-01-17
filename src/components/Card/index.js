import React from "react";

import { PageCard } from "./styles";

function Card({ children, ...props }) {
  return <PageCard {...props}>{children}</PageCard>;
}

export default Card;
