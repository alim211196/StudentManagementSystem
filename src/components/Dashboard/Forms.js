import React, { memo } from "react";
import Grid from "@mui/material/Grid";
import CustomTextField from "../../Utils/CustomTextField";
import CustomDatePicker from "../../Utils/CustomDatePicker";
import CustomDropDown from "../../Utils/CustomDropDown";
import Box from "@mui/material/Box";
import StudentImage from "../../images/students.png";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CustomButton from "../../Utils/CustomButton";
import { IconButton } from "@mui/material";
import CustomDivider from "../../Utils/CustomDivider";
import ArrowBackIcon from "../../images/Back.png";
import { Tooltip } from "@mui/material";
import CustomTheme from "../../Utils/CustomTheme";
import { Courses, Gender } from "../../Utils/DropdownArray";
import { DashboardStyle } from "./styles";
const Forms = ({
  handleSubmit,
  formData,
  setFormData,
  title,
  flag,
  setFlag,
  getStudentData,
}) => {
  const styles = DashboardStyle();

  const coursesName = Courses.map(({ course }) => ({
    name: course.name,
    value: course.value,
  }));

  const coursesYear = Courses.find(
    ({ course }) => course.value === formData.course
  )?.years;

  const backFun = () => {
    getStudentData();
    setFlag(false);
  };
  const BackButtonCondition = () => {
    if (flag === "add") {
      return null;
    } else {
      return (
        <IconButton onClick={() => backFun()} sx={styles.iconBtn}>
          <Tooltip title="Back" placement="right">
            <Avatar
              src={ArrowBackIcon}
              variant="square"
              alt="Back"
              sx={styles.iconBtnAvatar}
            />
          </Tooltip>
        </IconButton>
      );
    }
  };

  return (
    <CustomTheme>
      <Container component="main" maxWidth="lg" sx={styles.MainContainer}>
        <CssBaseline />
        <BackButtonCondition />
        <Box sx={styles.parentBox}>
          <Avatar
            src={StudentImage}
            alt="student profile"
            variant="square"
            sx={styles.avatar}
          />
          <CustomDivider title={title} />

          <Box component="form" sx={styles.innerBox} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <CustomTextField
                  label={"Full name"}
                  name="fullName"
                  value={formData.fullName}
                  setFormData={setFormData}
                  type="text"
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <CustomTextField
                  label={"Email"}
                  name="email"
                  value={formData.email}
                  setFormData={setFormData}
                  type="email"
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                {" "}
                <CustomTextField
                  label={"Mobile number"}
                  name="phone"
                  value={formData.phone}
                  setFormData={setFormData}
                  type="number"
                  disabled={false}
                />
              </Grid>

              <CustomDatePicker
                label={"Date of birth"}
                name="dob"
                value={formData.dob}
                setFormData={setFormData}
              />
              <CustomDropDown
                label={"Gender"}
                name="gender"
                value={formData.gender}
                setFormData={setFormData}
                data={Gender}
              />
              <CustomDropDown
                label={"Course"}
                name="course"
                value={formData.course}
                setFormData={setFormData}
                data={coursesName}
              />
              <CustomDropDown
                label={"Course year"}
                name="course_year"
                value={formData.course_year}
                setFormData={setFormData}
                data={coursesYear}
              />

              <Grid item xs={12} sm={6} md={4}>
                {" "}
                <CustomTextField
                  label={"Address"}
                  name="address"
                  value={formData.address}
                  setFormData={setFormData}
                  type="text"
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                {" "}
                <CustomTextField
                  label={"City"}
                  name="city"
                  value={formData.city}
                  setFormData={setFormData}
                  type="text"
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                {" "}
                <CustomTextField
                  label={"Pincode"}
                  name="pinCode"
                  value={formData.pinCode}
                  setFormData={setFormData}
                  type="text"
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                {" "}
                <CustomTextField
                  label={"State"}
                  name="state"
                  value={formData.state}
                  setFormData={setFormData}
                  type="text"
                  disabled={false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                {" "}
                <CustomTextField
                  label={"Country"}
                  name="country"
                  value={formData.country}
                  setFormData={setFormData}
                  type="text"
                  disabled={false}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={false} sm={3} md={4} />
              <Grid item xs={12} sm={6} md={4}>
                <CustomButton text={"  Submit your form"} />
              </Grid>
              <Grid item xs={false} sm={3} md={4} />
            </Grid>
          </Box>
        </Box>
      </Container>
    </CustomTheme>
  );
};

export default memo(Forms);
