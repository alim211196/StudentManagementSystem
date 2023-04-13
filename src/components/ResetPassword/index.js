import React, { useState } from "react";
import CustomButton from "../../Utils/CustomButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import CustomPassword from "../../Utils/CustomPassword";
import ResetPass from "../../images/resetPass.png";
import BoxWrapper from "../../Utils/BoxWrapper";
import { RESET_PASSWORD } from "../../ApiFunctions/users";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { useCookies } from "react-cookie";
export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { ID } = location.state;
    const [cookies] = useCookies(["theme"]);
  const [formData, setFormData] = useState({
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
    RESET_PASSWORD(ID, formData.password)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: res.data,
            severity: "success",
          })
        );
        navigate("/sign_in");
      })
      .catch((err) => {
           errorHandler(err?.status, err?.data, dispatch);
      });
  };

  return (
    <BoxWrapper
      maxWidth={"xs"}
      text={"Reset password"}
      icon={ResetPass}
      label={"reset password"}
      handleSubmit={handleSubmit}
      cookies={cookies}
    >
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
      <CustomButton text={"Reset Password"} />
    </BoxWrapper>
  );
}
