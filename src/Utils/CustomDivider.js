import { Chip, Divider } from "@mui/material";
import React, { memo } from "react";

const CustomDivider = ({ title }) => {
  return (
    <Divider sx={{ width: "100%" }}>
      <Chip component="h1" variant="h5" label={title} />
    </Divider>
  );
};

export default memo(CustomDivider);
