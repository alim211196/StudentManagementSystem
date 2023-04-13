import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Utils/CustomButton";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import CustomTextField from "../../Utils/CustomTextField";
import CustomPassword from "../../Utils/CustomPassword";
import userReg from "../../images/Register.png";
import BoxWrapper from "../../Utils/BoxWrapper";
import { USER_REGISTER } from "../../ApiFunctions/users";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { useCookies } from "react-cookie";
export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [cookies] = useCookies(["theme"]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataValues = new FormData(event.target);
    const data = {};
    for (let [key, value] of formDataValues.entries()) {
      data[key] = value;
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

    const { password, confirm_password } = data;
    if (password !== confirm_password) {
      dispatch(
        openSnackbar({
          message: "Passwords do not match.",
          severity: "error",
        })
      );
      return;
    }

    const newFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    USER_REGISTER(newFormData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: "Registered successfully.",
            severity: "success",
          })
        );
        navigate("/");
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  return (
    <BoxWrapper
      text={"Sign up"}
      icon={userReg}
      label={"Sign up"}
      handleSubmit={handleSubmit}
      linkText={"Already have an account? Sign in"}
      path={"/sign_in"}
      cookies={cookies}
    >
      <CustomTextField
        label={"First Name"}
        name="firstName"
        value={formData.firstName}
        setFormData={setFormData}
        type="text"
        disabled={false}
      />

      <CustomTextField
        label={"Last Name"}
        name="lastName"
        value={formData.lastName}
        setFormData={setFormData}
        type="text"
        disabled={false}
      />

      <CustomTextField
        label={"Email Address"}
        name="email"
        value={formData.email}
        setFormData={setFormData}
        type="email"
        disabled={false}
      />

      <CustomPassword
        label={"Password"}
        name="password"
        value={formData.password}
        setFormData={setFormData}
        cookies={cookies}
      />

      <CustomPassword
        label={"Confirm Password"}
        name="confirm_password"
        value={formData.confirm_password}
        setFormData={setFormData}
        cookies={cookies}
      />

      <CustomButton text={"Sign Up"} />
    </BoxWrapper>
  );
}
