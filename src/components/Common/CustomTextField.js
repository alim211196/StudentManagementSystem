import React, { memo } from "react";
import { Grid, TextField } from "@mui/material";
import CustomTheme from "./CustomTheme";
const CustomTextField = ({ label, name, value, onChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <CustomTheme>
        <TextField
          fullWidth
          id="outlined-basic"
          label={label}
          variant="outlined"
          size="small"
          name={name}
          value={value}
          onChange={onChange}
        />
      </CustomTheme>
    </Grid>
  );
};

export default memo(CustomTextField);
