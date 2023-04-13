import React, { useState } from "react";
import CustomButton from "../../Utils/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import CustomTextField from "../../Utils/CustomTextField";
import ForgotPass from "../../images/forgotPass.png";
import BoxWrapper from "../../Utils/BoxWrapper";
import { FORGOT_PASSWORD } from "../../ApiFunctions/users";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { useCookies } from "react-cookie";
export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [cookies] = useCookies(["theme"]);
  const [formData, setFormData] = useState({
    email: "",
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
          message: "Please enter your email address.",
          severity: "error",
        })
      );
      return;
    }

    FORGOT_PASSWORD(formData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: "Valid email address.",
            severity: "success",
          })
        );
        navigate("/reset-password", { state: { ID: res.data } });
      })
      .catch((err) => {
         errorHandler(err?.status, err?.data, dispatch);
      });
  };

  return (
    <BoxWrapper
      text={"Forgot password"}
      icon={ForgotPass}
      label={"forgot password"}
      handleSubmit={handleSubmit}
      linkText={"Sign in"}
      path={"/sign_in"}
      linkText1={"Sign Up"}
      path1={"/sign_up"}
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
      <CustomButton text={"Forgot Password"} />
    </BoxWrapper>
  );
}
