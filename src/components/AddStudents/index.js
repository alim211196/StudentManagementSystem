import React, { useState } from "react";
import CustomTheme from "../../Utils/CustomTheme";
import Forms from "./Forms";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import MiniDrawer from "../Drawer";
import { CREATE_STUDENT } from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import ScrollButton from "../../Utils/ScrollButton";
import { Container, CssBaseline } from "@mui/material";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const inputDate = new Date();
  const isoDate = inputDate.toISOString();
  const formattedDate = isoDate.slice(0, 10);
  const DataObj = {
    fullname: "",
    email: "",
    phone: "",
    dob: formattedDate,
    gender: "male",
    course: "bca",
    course_year: "first year",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
    role: "Student",
  };
  const [formData, setFormData] = useState(DataObj);

    const handleFileInputChange = (e) => {
      let files = e.target.files;
      let fsize = files[0]?.size;

      const file = Math.round(fsize / 1024);

      if (file > 100) {
        dispatch(
          openSnackbar({
            message: "Please upload image less than 1MB.",
            severity: "error",
          })
        );
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
        console.log(e.target.result);
      };
    };
    const handleClear = () => {
      setSelectedFile(null);
    };

  const handleSubmit = (event) => {
    console.log(formData);
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
    const newFormData = {
       ...formData,
      profileImage: selectedFile,
    }

    CREATE_STUDENT(newFormData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: "Submitted successfully.",
            severity: "success",
          })
        );
        setFormData(DataObj);
        handleClear()
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  


  return (
    <CustomTheme>
      <MiniDrawer>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Forms
            handleFileInputChange={handleFileInputChange}
            handleClear={handleClear}
            selectedFile={selectedFile}
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
            flag={"add"}
          />
        </Container>
        <ScrollButton />
      </MiniDrawer>
    </CustomTheme>
  );
};

export default Dashboard;
