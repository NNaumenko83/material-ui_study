import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

export default function SimpleContainer({ children }) {
  return (
    <>
      <CssBaseline />
      <Container fixed>{children}</Container>
    </>
  );
}
