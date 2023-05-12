import React, { memo } from "react";
import { TextField, Typography } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
import { DarkFF4F } from "./CommonCookies";
import { useCookies } from "react-cookie";
const CustomDateTextField = ({ label, name, value, setFormData }) => {
  const [cookies] = useCookies(["theme"]);
  return (
    <CustomTheme>
      <Typography sx={{ color: DarkFF4F(cookies), fontWeight: "500" }}>
        {label} <span style={{ color: "red", marginLeft: 5 }}>*</span>
      </Typography>
      <TextField
        margin="dense"
        fullWidth
        required
        id="date"
        type="date"
        size="small"
        name={name}
        value={value}
        onChange={(e) => handleChange(e, setFormData)}
        variant="outlined"
        inputProps={{
          max: "2999-12-31",
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </CustomTheme>
  );
};

export default memo(CustomDateTextField);
