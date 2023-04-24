import React, { memo } from "react";
import { Grid } from "@mui/material";
import { Password } from "@mui/icons-material";
import CustomPassword from "../../../Utils/CustomPassword";
import PaperWrapper from "../../../Utils/PaperWrapper";
const UpdatePassword = ({ cookies, formData, setFormData }) => {
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#4CAF50"}
      icon={<Password />}
      text={"Update Password :"}
    >
      <Grid container spacing={2} sx={{ p: 2, mb: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomPassword
            label={"Current Password"}
            name="currentPassword"
            value={formData.currentPassword}
            setFormData={setFormData}
            cookies={cookies}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomPassword
            label={"New Password"}
            name="newPassword"
            value={formData.newPassword}
            setFormData={setFormData}
            cookies={cookies}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomPassword
            label={"Confirm Password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            setFormData={setFormData}
            cookies={cookies}
          />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(UpdatePassword);
