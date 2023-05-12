import { Paper, Typography, Box } from "@mui/material";
import { CardBorder, Dark00FF } from "./CommonCookies";
import React, { memo } from "react";

const PaperWrapper = ({ children, cookies, boxBGColor, icon, text }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        mb: 3,
        background: Dark00FF(cookies),
        border: CardBorder(cookies, boxBGColor),
        padding: "0px !important",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "5px",
          background: boxBGColor,
          color: "#fff",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        {icon}
        <Typography sx={{ fontSize: 18, fontWeight: "bold", ml: 1 }}>
          {text}
        </Typography>
      </Box>
      {children}
    </Paper>
  );
};

export default memo(PaperWrapper);
