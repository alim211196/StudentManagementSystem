import { Avatar, Box } from "@mui/material";
import React, { memo } from "react";
import CustomDivider from "./CustomDivider";

const TitleUI = ({ text, icon, label }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={icon}
          variant="square"
          alt={label}
          sx={{ width: 56, height: 56, textAlign: "center" }}
        />
      </Box>

      <CustomDivider title={text} />
    </>
  );
};

export default memo(TitleUI);
