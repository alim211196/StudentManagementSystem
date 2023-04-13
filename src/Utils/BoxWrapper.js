import React,{memo} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTheme from "./CustomTheme";
import Header from "./Header";
import TitleUI from "./TitleUI";
import { Grid } from "@mui/material";
import LinkComp from "./LinkComp";
import { Dark00 } from "./CommonCookies";
const BoxWrapper = ({
  cookies,
  text,
  icon,
  label,
  handleSubmit,
  children,
  linkText1,
  linkText,
  path,
  path1,
}) => {
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
          backgroundColor: Dark00(cookies),
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
            {" "}
            <TitleUI text={text} icon={icon} label={label} />
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 3,
                width: "-webkit-fill-available",
              }}
            >
              {children}
            </Box>
            <Grid
              container
              maxWidth="xs"
              justifyContent={linkText1 ? "space-between" : "center"}
            >
              <Grid item>
                <LinkComp
                  text={linkText}
                  path={path}
                  cookies={cookies}
                />
              </Grid>
              {linkText1 && (
                <Grid item>
                  <LinkComp
                    text={linkText1}
                    path={path1}
                    cookies={cookies}
                  />
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </CustomTheme>
  );
};

export default memo(BoxWrapper);
