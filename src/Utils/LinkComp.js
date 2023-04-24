import { Link } from "@mui/material";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { DarkFFF } from "./CommonCookies";

const LinkComp = ({ path, text, cookies }) => {
  const navigate = useNavigate();
  return (
    <Link
      sx={{
        color:
          text === "Already have an account? Sign in"
            ? "#FFF"
            : DarkFFF(cookies),
      }}
      component="button"
      variant="body2"
      onClick={() => navigate(path)}
    >
      {text}
    </Link>
  );
};

export default memo(LinkComp);
