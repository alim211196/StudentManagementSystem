import React, { memo } from "react";
import { Grid, TextField } from "@mui/material";
import CustomTheme from "./CustomTheme";
const CustomDatePicker = ({ label, name, value, onChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <CustomTheme>
        <TextField
          fullWidth
          id="date"
          type="date"
          size="small"
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          variant="outlined"
          inputProps={{
           max:"2999-12-31"
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
