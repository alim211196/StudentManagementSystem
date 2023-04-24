import React,{memo} from "react";
import PaperWrapper from "./PaperWrapper";
import { Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { Home } from "@mui/icons-material";

const AddressInfo = ({ cookies, formData,setFormData }) => {
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#AB47BC"}
      icon={<Home />}
      text={"Address Info :"}
    >
      <Grid container spacing={2} sx={{ p: 2, mb: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomTextField
            label={"Address"}
            name="address"
            value={formData.address}
            setFormData={setFormData}
            type="text"
            disabled={false}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CustomTextField
            label={"City"}
            name="city"
            value={formData.city}
            setFormData={setFormData}
            type="text"
            disabled={false}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          {" "}
          <CustomTextField
            label={"Pincode"}
            name="pinCode"
            value={formData.pinCode}
            setFormData={setFormData}
            type="text"
            disabled={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomTextField
            label={"State"}
            name="state"
            value={formData.state}
            setFormData={setFormData}
            type="text"
            disabled={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomTextField
            label={"Country"}
            name="country"
            value={formData.country}
            setFormData={setFormData}
            type="text"
            disabled={false}
          />
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(AddressInfo);
