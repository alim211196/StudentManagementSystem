import React, { memo } from "react";
import { Grid, TextField } from "@mui/material";
import CustomTheme from "./CustomTheme";
import { handleChange } from "./HandleChange";
const CustomDatePicker = ({ label, name, value, setFormData }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomTheme>
        <TextField
          margin="dense"
          fullWidth
          required
          id="date"
          type="date"
          size="small"
          label={label}
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
    </Grid>
  );
};

export default memo(CustomDatePicker);
