import { Box } from "@mui/material";
import React, { useState } from "react";
import {useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../../app/reducer/Snackbar";
import { UPDATE_PASSWORD } from "../../../ApiFunctions/users";
import { errorHandler } from "../../../ApiFunctions/ErrorHandler";
import FormButton from "../../../Utils/FormButton";
import UpdatePassword from "./UpdatePassword";
const PasswordIndex = ({ styles }) => {
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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 1, padding: "0px!important" }}
    >
      <UpdatePassword
        cookies={cookies}
        formData={formData}
        setFormData={setFormData}
      />
      <FormButton cookies={cookies} text={"Update Password"} />
    </Box>
  );
};

export default PasswordIndex;
