import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../../Utils/CustomButton";
import CustomDivider from "../../../Utils/CustomDivider";
import CustomPassword from "../../../Utils/CustomPassword";
import {useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../../app/reducer/Snackbar";
import { UPDATE_PASSWORD } from "../../../ApiFunctions/users";
import { errorHandler } from "../../../ApiFunctions/ErrorHandler";
const ChangePassword = ({ styles }) => {
  const [hidden, setHidden] = useState(true);
  const matches = useMediaQuery("(min-width:900px)");
  const [cookies] = useCookies(["UserId", "theme"]);
  const dispatch = useDispatch();
  const DataObj = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(DataObj);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataValues = new FormData(event.target);

    const data = {};
    for (let [key, value] of formDataValues.entries()) {
      data[key] = value;
    }

    const { newPassword, confirmPassword } = data;
    if (newPassword !== confirmPassword) {
      dispatch(
        openSnackbar({
          message: "Passwords do not match.",
          severity: "error",
        })
      );
      return;
    }

    const hasEmptyFields = Object.values(data).some((value) => !value);
    if (hasEmptyFields) {
      dispatch(
        openSnackbar({
          message: "Please fill out all fields.",
          severity: "error",
        })
      );
      return;
    }

    UPDATE_PASSWORD(
      cookies.UserId,
      formData.currentPassword,
      formData.newPassword
    )
      .then((res) => {
        dispatch(
          openSnackbar({
            message: res.data,
            severity: "success",
          })
        );
        setFormData(DataObj);
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  const ButtonUI = () => {
    return (
      <>
        {hidden ? (
          <LoadingButton
            type="submit"
            variant="contained"
            onClick={() => setHidden(false)}
            sx={styles.editProfileBtn}
          >
            {"Edit Password"}
          </LoadingButton>
        ) : (
          <CustomButton
            text={"Update Password"}
            removeMargin={true}
            cookies={cookies}
          />
        )}
      </>
    );
  };

  return (
    <Box sx={styles.parentBox}>
      <Box sx={styles.childBox}>
        <CustomDivider title={"Change your password"} />
        <Box component="form" sx={styles.subChildBox2} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {!hidden && (
              <>
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
              </>
            )}
            {hidden ? (
              <Grid item xs={false} sm={6} md={8}>
                <Typography variant="p" sx={styles.hiddenText}>
                  It's a good idea to use a strong password that you're not
                  using elsewhere
                </Typography>
              </Grid>
            ) : (
              <>{matches && <Grid item xs={false} sm={false} md={4} />}</>
            )}

            <Grid item xs={12} sm={6} md={4}>
              <ButtonUI />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
