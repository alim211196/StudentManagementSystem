import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import { USER_REGISTER } from "../../ApiFunctions/users";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { useCookies } from "react-cookie";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTheme from "../../Utils/CustomTheme";
import Header from "../../Utils/Header";
import { Typography } from "@mui/material";
import { CardBorder, Dark00 } from "../../Utils/CommonCookies";
import ScrollButton from "../../Utils/ScrollButton";
import PersonalInfo from "../../Utils/PersonalInfo";
import EducationalInfo from "../../Utils/EducationalInfo";
import AddressInfo from "../../Utils/AddressInfo";
import PasswordInfo from "../../Utils/PasswordInfo";
import FormButton from "../../Utils/FormButton";
export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies] = useCookies(["theme"]);
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
    password: "",
    role: "Teacher",
  };

  const [formData, setFormData] = useState({
    ...DataObj,
    confirm_password: "",
  });

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
         ...formData,
         profileImage: selectedFile,
       };

    USER_REGISTER(newFormData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: "Registered successfully.",
            severity: "success",
          })
        );
        setFormData(DataObj);
        navigate("/");
        handleClear();
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  return (
    <CustomTheme>
      <Header />
      <Box
        sx={{
          width: "100%",
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: Dark00(cookies),
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: cookies.theme !== "dark" && "#fff",
            width: "100%",
            height: "200px",
            borderBottom: CardBorder(cookies, "#1976D2"),
          }}
        >
          <Typography
            sx={{
              color: cookies.theme === "dark" ? "#fff" : "#1976D2",
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
              p: 2,
            }}
          >
            Sign up
          </Typography>
        </Box>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ marginTop: "-100px", position: "relative" }}
          >
            <PersonalInfo
              cookies={cookies}
              formData={formData}
              setFormData={setFormData}
              handleFileInputChange={handleFileInputChange}
              handleClear={handleClear}
              selectedFile={selectedFile}
            />
            <EducationalInfo
              cookies={cookies}
              formData={formData}
              setFormData={setFormData}
            />

            <AddressInfo
              cookies={cookies}
              formData={formData}
              setFormData={setFormData}
            />
            <PasswordInfo
              cookies={cookies}
              formData={formData}
              setFormData={setFormData}
            />
            <FormButton cookies={cookies} text={"Submit Your Form"} />
          </Box>
        </Container>
      </Box>
      <ScrollButton />
    </CustomTheme>
  );
}
