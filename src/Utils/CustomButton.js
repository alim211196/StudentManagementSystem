import { LoadingButton } from "@mui/lab";
import React, { memo } from "react";

const CustomButton = ({ text, removeMargin }) => {
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      sx={{
        marginTop: removeMargin ? "10px" : "20px",
        background: "radial-gradient(circle at center, #DC143C , #292929)",
        width: "100%",
        textTransform:'capitalize'
      }}
    >
      {text}
    </LoadingButton>
  );
};

export default memo(CustomButton);
