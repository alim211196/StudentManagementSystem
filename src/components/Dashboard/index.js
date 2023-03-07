import React, { useState } from "react";

import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
import CustomTheme from "../Common/CustomTheme";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../Common/CustomSnackbar";
import Forms from "../Common/Forms";

const Dashboard = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    severity: "",
    message: "success",
  });
  const [open, setOpen] = useState(false);
     const inputDate = new Date();
     const isoDate = inputDate.toISOString();
     const formattedDate = isoDate.slice(0, 10);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: formattedDate,
    gender: "male",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
  });
  function handleClose() {
    setOpen(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataValues = new FormData(event.target)

    // Convert formData to an object
    const data = {};
    for (let [key, value] of formDataValues.entries()) {
      data[key] = value;
    }
    // Check if all fields are filled
    const hasEmptyFields = Object.values(data).some((value) => !value);
    if (hasEmptyFields) {
           setState({
             message: "Please fill out all fields",
             severity: "error",
           });
           setOpen(true);
      return;
    }
    axios
      .post("http://localhost:3000/students", formData)
      .then((response) => {
        if (response.status === 201) {
          setState({
            message: "Submitted Successfully.",
            severity: "success",
          });
          setOpen(true);
          navigate("/thankyou");
        }
      })
      .catch((error) => {
        setState({
          message: "Not Submitted",
          severity: "error",
        });
        setOpen(true);
      });
  };

  return (
    <CustomTheme>
      <Header />
      <Forms
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        title={"Please enter your details properly"}
      />

      <CustomSnackbar handleClose={handleClose} open={open} state={state} />
      <Footer />
    </CustomTheme>
  );
};

export default Dashboard;
