import React, { memo } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { handleChange } from "./HandleChange";
import CustomTheme from "./CustomTheme";
import { DarkFFF } from "./CommonCookies";
const CustomPassword = ({
  label,
  name,
  value,
  setFormData,
  cookies,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <CustomTheme>
      <FormControl
        variant="outlined"
        margin="dense"
        size="small"
        fullWidth
        required
      >
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          // id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={(e) => handleChange(e, setFormData)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                //   aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ color:DarkFFF(cookies)}}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    </CustomTheme>
  );
};

export default memo(CustomPassword);
