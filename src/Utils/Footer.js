import { Link, Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { DarkFFF, Dark004F } from "./CommonCookies";
function Copyright({ cookies }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ color: DarkFFF(cookies) }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Student Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = ({ cookies }) => {
  return (
    <Box
      sx={{
        background: Dark004F(cookies),
        p: 2,
        mt: 5,
        boxShadow: "0px 0px 6px 3px #292929",
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
      <Copyright cookies={cookies} />
    </Box>
  );
};

export default memo(Footer);
