import { Link, Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { DarkFFF, Dark004F, FooterBorder, CardBorder } from "./CommonCookies";
import { useNavigate } from "react-router-dom";

function Copyright({ cookies, navigate }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ color: DarkFFF(cookies) }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        onClick={() => navigate("/sign_in")}
        sx={{ cursor: "pointer" }}
      >
        Student Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = ({ cookies }) => {
   const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: Dark004F(cookies),
        p: "30px 0px",
        mt: "-20px",
        borderTop: CardBorder(cookies, "#1976D2"),
        zIndex: 0,
        position: "relative",
        color: DarkFFF(cookies),
      }}
      component="footer"
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ color: DarkFFF(cookies) }}
        gutterBottom
      >
        Student Management System
      </Typography>
      <Copyright cookies={cookies} navigate={navigate} />
    </Box>
  );
};

export default memo(Footer);
