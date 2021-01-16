import React from "react";

import { FormComponent } from "./styles";

function Form({ children, ...props }) {
  return <FormComponent {...props}>{children}</FormComponent>;
}

export default Form;
