import { Grid, Paper } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { Dark00FF, DarkFFF } from "./CommonCookies";
import CustomDropDown from "./CustomDropDown";
import { GET_COURSES } from "../ApiFunctions/students";
import { errorHandler } from "../ApiFunctions/ErrorHandler";

const CourseFilter = ({ cookies, formData, setFormData }) => {
  const [Courses, setCourses] = useState([]);
  
  useEffect(() => {
    GET_COURSES()
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data);
      });
  }, []);
  const coursesName = Courses.map(({ course }) => ({
    name: course.name,
    value: course.value,
  }));

  const coursesYear = Courses.find(
    ({ course }) => course.value === formData.course
  )?.years;

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 2,
        mb: 2,
        background: Dark00FF(cookies),
        // border: CardBorder(cookies, "#1976D2"),
      }}
    >
      <Grid
        container
        sx={{ pl: 1, pr: 1, display: "flex", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          textAlign={"center"}
          sx={{ color: DarkFFF(cookies), fontSize: "18px" }}
        >
          Select course
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: "4px" }}>
          <CustomDropDown
            label={
              formData.role === "Student" ? "Select course" : "Select faculty"
            }
            name="course"
            value={formData.course}
            setFormData={setFormData}
            data={coursesName}
            hidden={true}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          textAlign={"center"}
          sx={{ color: DarkFFF(cookies), fontSize: "18px" }}
        >
          Select batch
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: "4px" }}>
          <CustomDropDown
            label={"Select batch"}
            name="course_year"
            value={formData.course_year}
            setFormData={setFormData}
            data={coursesYear}
            hidden={true}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(CourseFilter);
