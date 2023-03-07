import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Container } from "@mui/material";
const index = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ padding: "5rem 1rem" }}
      ></Container>
      <Footer />
    </>
  );
};

export default index;
