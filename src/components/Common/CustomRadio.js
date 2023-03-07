import React, { memo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import CustomTheme from "./CustomTheme";
const CustomRadio = ({label, name, value, onChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <CustomTheme>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            name={name}
            value={value}
            onChange={onChange}
            size="small"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </CustomTheme>
    </Grid>
  );
};

export default memo(CustomRadio);
