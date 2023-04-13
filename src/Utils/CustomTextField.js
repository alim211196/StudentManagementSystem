import React, { memo } from "react";
import { TextField } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
const CustomTextField = ({
  label,
  name,
  value,
  type,
  disabled,
  setFormData,
}) => {
  return (
    <CustomTheme>
      <TextField
        margin="dense"
        required
        fullWidth
        id="outlined-basic"
        label={label}
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
