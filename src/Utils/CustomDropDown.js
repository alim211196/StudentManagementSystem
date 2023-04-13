import React, { memo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
const CustomDropDown = ({ label, name, value, setFormData, data }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomTheme>
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
    </Grid>
  );
};

export default memo(CustomDropDown);
