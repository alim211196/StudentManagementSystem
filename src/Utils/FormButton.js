import { Box, Paper } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import { CardBorder } from "./CommonCookies";

const FormButton = ({ cookies, text, loading }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 1,
        mb: 2,
        background: "#1976D2",
        border: CardBorder(cookies, "#1976D2"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        p: 1,
      }}
    >
      <Box>
        <CustomButton text={text} loading={loading}/>
      </Box>
    </Paper>
  );
};

export default FormButton;
