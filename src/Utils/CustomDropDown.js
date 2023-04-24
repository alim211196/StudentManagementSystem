import React, { memo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
import { DarkFF4F } from "./CommonCookies";
import { useCookies } from "react-cookie";
const CustomDropDown = ({ label, name, value, setFormData, data, hidden }) => {
  const [cookies] = useCookies(["theme"]);
  return (
    <CustomTheme>
      {!hidden &&  <Typography sx={{ color: DarkFF4F(cookies), fontWeight: "500" }}>
        {label} <span style={{ color: "red", marginLeft: 5 }}>*</span>
      </Typography>}
      <FormControl fullWidth margin="dense" required>
        <Select
          id="demo-simple-select"
          name={name}
          value={value}
          onChange={(e) => handleChange(e, setFormData)}
          size="small"
        >
          {data?.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </CustomTheme>
  );
};

export default memo(CustomDropDown);
