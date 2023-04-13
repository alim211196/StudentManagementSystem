import React, { useState } from "react";
import CustomButton from "../../Utils/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import { useCookies } from "react-cookie";
import CustomTextField from "../../Utils/CustomTextField";
import CustomPassword from "../../Utils/CustomPassword";
import user from "../../images/admin.png";
import BoxWrapper from "../../Utils/BoxWrapper";
import { USER_LOGIN } from "../../ApiFunctions/users";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["loggedIn", "UserId","theme"]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    USER_LOGIN(formData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: "Login successfully.",
            severity: "success",
          })
        );
        setCookie("loggedIn", "true", { path: "/" });
        setCookie("UserId", res.data, { path: "/" });
        navigate("/dashboard");
      })
      .catch((err) => {
       errorHandler(err?.status, err?.data, dispatch);
      });
  };

  return (
    <BoxWrapper
      text={"Sign in"}
      icon={user}
      label={"Sign in"}
      handleSubmit={handleSubmit}
      linkText={"Forgot password"}
      path={"/forgot-password"}
      cookies={cookies}
    >
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
      <CustomButton text={"Sign In"} />
    </BoxWrapper>
  );
}
