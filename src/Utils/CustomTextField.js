import React, { memo } from "react";
import { TextField, Typography } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
import { DarkFFF } from "./CommonCookies";
import { useCookies } from "react-cookie";
const CustomTextField = ({
  label,
  name,
  value,
  type,
  disabled,
  setFormData,
}) => {
   const [cookies] = useCookies(["theme"]);
  return (
    <CustomTheme>
      <Typography sx={{ color: DarkFFF(cookies), fontWeight: "500" }}>
        {label} <span style={{ color: "red", marginLeft: 5 }}>*</span>
      </Typography>
      <TextField
        margin="dense"
        required
        fullWidth
        placeholder={`Enter ${name}`}
        id="outlined-basic"
        variant="outlined"
        size="small"
        name={name}
        value={value}
        onChange={(e) => handleChange(e, setFormData)}
        type={type}
        disabled={disabled}
      />
    </CustomTheme>
  );
};

export default memo(CustomTextField);
