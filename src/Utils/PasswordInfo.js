import React, { memo } from "react";
import PaperWrapper from "./PaperWrapper";
import { Grid } from "@mui/material";
import { Password } from "@mui/icons-material";
import CustomPassword from './CustomPassword'
const PasswordInfo = ({ cookies, formData, setFormData }) => {

    
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#4CAF50"}
      icon={<Password />}
      text={"Enter Password :"}
    >
      <Grid container spacing={2} sx={{ p: 2, mb: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomPassword
            label={"Password"}
            name="password"
            value={formData.password}
            setFormData={setFormData}
            cookies={cookies}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomPassword
            label={"Confirm Password"}
            name="confirm_password"
            value={formData.confirm_password}
            setFormData={setFormData}
            cookies={cookies}
          />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(PasswordInfo);
