import React, { useEffect } from "react";
import Header from "../../Utils/Header";
import Footer from "../../Utils/Footer";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Contact from "../Contact";
import LinkComp from "../../Utils/LinkComp";
import { HomeStyle } from "./styles";
import CustomTheme from "../../Utils/CustomTheme";
import ScrollButton from "../../Utils/ScrollButton";
const Home = () => {
  const [cookies] = useCookies(["loggedIn", "theme"]);
  const styles = HomeStyle(cookies);
  useEffect(() => {
    if (window.location.path === "/" && cookies.loggedIn === "true") {
      <Navigate to="/dashboard" />;
    }
  }, [cookies.loggedIn]);

  return cookies.loggedIn === "true" ? (
    <Navigate to="/dashboard" />
  ) : (
    <CustomTheme>
      <Box sx={styles.parentContainer}>
        <Box sx={styles.Container}>
          <Header />
          <Box sx={styles.MainContainer}>
            <Box sx={styles.innerBox}>
              <Typography sx={styles.typo1}>
                Welcome to Student Management System
              </Typography>
              <Typography sx={styles.typo2}>{styles.longText}</Typography>
              <LinkComp
                text={"Already have an account? Sign in"}
                path={"/sign_in"}
                cookies={cookies}
              />
            </Box>
          </Box>

          <Contact Home={true} cookies={cookies} />
        </Box>
        <Footer cookies={cookies} />
      </Box>
      <ScrollButton />
    </CustomTheme>
  );
};

export default Home;
