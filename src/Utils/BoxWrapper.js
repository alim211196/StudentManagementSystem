import React,{memo} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTheme from "./CustomTheme";
import Header from "./Header";
import { Grid, Paper, Typography } from "@mui/material";
import LinkComp from "./LinkComp";
import { Dark00, Dark00FF } from "./CommonCookies";
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
  maxWidth,
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
          background: Dark00(cookies),
        }}
      >
        <Container component="main" maxWidth={maxWidth}>
          <CssBaseline />
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
              background: Dark00FF(cookies),
            }}
          >
            <Typography
              sx={{
                color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {text}
            </Typography>
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
                <LinkComp text={linkText} path={path} cookies={cookies} />
              </Grid>
              {linkText1 && (
                <Grid item>
                  <LinkComp text={linkText1} path={path1} cookies={cookies} />
                </Grid>
              )}
            </Grid>
          </Paper>
        </Container>
      </Box>
    </CustomTheme>
  );
};

export default memo(BoxWrapper);
