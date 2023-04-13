import React, { useState, memo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTheme from "../../Utils/CustomTheme";
import Header from "../../Utils/Header";
import CustomButton from "../../Utils/CustomButton";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import CustomTextField from "../../Utils/CustomTextField";
import TitleUI from "../../Utils/TitleUI";
import contact from "../../images/contact.png";
import CustomMultilineTextField from "../../Utils/CustomMultilineTextField";
import { Typography } from "@mui/material";
import { POST_COMMENT } from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { ContactStyle } from "./styles";
const Contact = ({ Home, cookies }) => {
  const styles = ContactStyle(cookies);

  const dispatch = useDispatch();
  const DataObj = {
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  };
  const [formData, setFormData] = useState(DataObj);

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

    const newFormData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      comment: formData.comment,
    };
    POST_COMMENT(newFormData)
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

  const BoxCondition = () => {
    if (Home === true) {
      return styles.OverrideBox;
    } else {
      return styles.normalBox;
    }
  };
  return (
    <CustomTheme>
      {!Home && <Header />}

      <Box sx={BoxCondition()}>
        {Home && (
          <Box sx={styles.MainContainer1}>
            <Typography sx={styles.typo3}>Leave a Reply</Typography>
            <Typography sx={styles.typo4}>
              Your email address will not be published. Required fields are
              marked *
            </Typography>
          </Box>
        )}
        <Container component="main" maxWidth="md">
          <CssBaseline />

          <Box sx={styles.innerBox}>
            <TitleUI
              text={"Get in touch"}
              icon={contact}
              label={"contact image"}
            />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <CustomTextField
                    label={"Full Name"}
                    name="fullName"
                    value={formData.fullName}
                    setFormData={setFormData}
                    type="text"
                    disabled={false}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomTextField
                    label={"Email Address"}
                    name="email"
                    value={formData.email}
                    setFormData={setFormData}
                    type="email"
                    disabled={false}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CustomTextField
                    label={"Mobile number"}
                    name="phone"
                    value={formData.phone}
                    setFormData={setFormData}
                    type="number"
                    disabled={false}
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={12}>
                  <CustomMultilineTextField
                    label={"Comment"}
                    name="comment"
                    value={formData.comment}
                    setFormData={setFormData}
                    type="text"
                    disabled={false}
                  />
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <CustomButton text={"Post Your Comment"} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </CustomTheme>
  );
};
export default memo(Contact);
