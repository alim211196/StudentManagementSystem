import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import TableIndex from "./TableIndex";

const index = () => {

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
        <TableIndex />
      <Footer />
    </>
  );
};

export default index;
