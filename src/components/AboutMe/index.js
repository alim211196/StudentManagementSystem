import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTheme from "../../Utils/CustomTheme";
import Header from "../../Utils/Header";
import TitleUI from "../../Utils/TitleUI";
import about from "../../images/about.png";
import DynamicList from "./DynamicList";
import name from '../../images/name.png'
import email from "../../images/emailAdd.png";
import phone from "../../images/phoneNum.png";
export default function AboutMe() {

  return (
    <CustomTheme>
      <Header />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TitleUI text={"Developed by"} icon={about} label={"about image"} />
            <DynamicList
              title={"Name"}
              subtitle={"Alim Mohammad"}
              icon={name}
            />
            <DynamicList
              title={"Email"}
              subtitle={"mohdalim619@gmail.com"}
              icon={email}
            />
            <DynamicList
              title={"Phone"}
              subtitle={"+918180036208"}
              icon={phone}
            />
          </Box>
        </Container>
      </Box>
      {/* <Footer /> */}
    </CustomTheme>
  );
}
