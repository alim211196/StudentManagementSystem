import React, { memo } from "react";
import { Typography, Grid, Paper, Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Dark00FF } from "./CommonCookies";
import { useCookies } from "react-cookie";
const TitleBox = ({ icon, text, flag, BackButtonCondition }) => {
  const [cookies] = useCookies(["theme"]);
  return (
    <Grid container spacing={2} sx={{mb:2}}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          elevation={0}
          sx={{
            p: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            background: Dark00FF(cookies),
            // border: CardBorder(cookies, "#1976D2"),
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {icon}
            <Typography
              sx={{
                color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                fontSize: "20px",
                ml: 1,
              }}
            >
              {text}
            </Typography>
          </Box>
          <Box>
            {flag === "update" && (
              <Button
                size="small"
                startIcon={<ArrowBackIcon />}
                variant="text"
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
                onClick={() => BackButtonCondition()}
              >
                Back
              </Button>
            )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(TitleBox);
