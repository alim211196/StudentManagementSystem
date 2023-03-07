import React, { memo } from "react";
import { Grid, TextField } from "@mui/material";
import CustomTheme from "./CustomTheme";
const CustomMultilineTextField = ({ label }) => {
  

  return (
    <Grid item xs={12} sm={6}>
      <CustomTheme>
        <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          rows={4}
          fullWidth
          size="small"
          variant="outlined"
        />
      </CustomTheme>
    </Grid>
  );
};

export default memo(CustomMultilineTextField);
