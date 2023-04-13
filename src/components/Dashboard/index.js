import React, { useState } from "react";
 import CustomTheme from "../../Utils/CustomTheme";
import Forms from "./Forms";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import MiniDrawer from "../Drawer";
import { CREATE_STUDENT } from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
const Dashboard = () => {
  const dispatch = useDispatch();
  const inputDate = new Date();
  const isoDate = inputDate.toISOString();
  const formattedDate = isoDate.slice(0, 10);
  const DataObj = {
    fullName: "",
    email: "",
    phone: "",
    dob: formattedDate,
    gender: "male",
    course:"bca",
    course_year:"first year",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
  };
  const [formData, setFormData] = useState(DataObj);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataValues = new FormData(event.target);
    // Convert formData to an object
    const data = {};
    for (let [key, value] of formDataValues.entries()) {
      data[key] = value;
    }
    // Check if all fields are filled
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
CREATE_STUDENT(formData)
  .then((res) => {
  dispatch(
    openSnackbar({
      message: "Submitted successfully.",
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
    <CustomTheme>
      <MiniDrawer>
        <Forms
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          title={"Please enter student details properly"}
          flag={"add"}
        />
      </MiniDrawer>
    </CustomTheme>
  );
};

export default Dashboard;
