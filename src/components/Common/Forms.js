import React, { memo } from "react";
import Grid from "@mui/material/Grid";
import CustomTextField from "../Common/CustomTextField";
import CustomDatePicker from "../Common/CustomDatePicker";
import { LoadingButton } from "@mui/lab";
import CustomRadio from "../Common/CustomRadio";
import Box from "@mui/material/Box";
import StudentImage from "../../images/avatar.jpeg";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Forms = ({ handleSubmit, formData, handleChange, title }) => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        height: "90vh",
        overflow: "scroll",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={StudentImage}
          alt="student profile"
          sx={{ width: 56, height: 56 }}
        />
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box
          component="form"
          sx={{
            mt: 3,
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <CustomTextField
              label={"Full name"}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <CustomTextField
              label={"Email"}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <CustomTextField
              label={"Mobile number"}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <CustomDatePicker
              label={"Date of birth"}
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <CustomRadio
              label={"Gender"}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <CustomTextField
              label={"Address"}
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <CustomTextField
              label={"City"}
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <CustomTextField
              label={"Pincode"}
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
            />
            <CustomTextField
              label={"State"}
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            <CustomTextField
              label={"Country"}
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={false} sm={3} />
            <Grid item xs={12} sm={6}>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  background: "#00AEEF",
                  width: "100%",
                }}
              >
                Submit your form
              </LoadingButton>
            </Grid>
            <Grid item xs={false} sm={3} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Forms);
