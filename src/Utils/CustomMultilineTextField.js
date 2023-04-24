import React, { memo } from "react";
import { TextField, Typography } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
import { useCookies } from "react-cookie";
import { DarkFFF } from "./CommonCookies";
const CustomMultilineTextField = ({
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
        id="outlined-basic"
        placeholder={`Enter ${name}`}
        variant="outlined"
        size="small"
        name={name}
        value={value}
        onChange={(e) => handleChange(e, setFormData)}
        type={type}
        disabled={disabled}
        multiline
        rows={4}
      />
    </CustomTheme>
  );
};

export default memo(CustomMultilineTextField);
