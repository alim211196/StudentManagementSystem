import React, { memo, useState, useEffect } from "react";
import PaperWrapper from "./PaperWrapper";
import { Grid } from "@mui/material";
import CustomDropDown from "./CustomDropDown";
import { School } from "@mui/icons-material";
import { GET_COURSES } from "../ApiFunctions/students";
import { errorHandler } from "../ApiFunctions/ErrorHandler";
import CustomTextField from "./CustomTextField";

const EducationalInfo = ({ cookies, formData, setFormData }) => {
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
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#EC407A"}
      icon={<School />}
      text={"Educational Info :"}
    >
      <Grid container spacing={2} sx={{ p: 2, mb: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          {formData.role === "Student" ? (
            <CustomTextField
              label={"Course"}
              name="course"
              value={formData?.course}
              setFormData={setFormData}
              type="text"
              disabled={true}
            />
          ) : (
            <CustomDropDown
              label={"Select faculty"}
              name="course"
              value={formData.course}
              setFormData={setFormData}
              data={coursesName}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          {formData.role === "Student" ? (
            <CustomTextField
              label={"Batch"}
              name="course_year"
              value={formData?.course_year}
              setFormData={setFormData}
              type="text"
              disabled={true}
            />
          ) : (
            <CustomDropDown
              label={"Select batch"}
              name="course_year"
              value={formData.course_year}
              setFormData={setFormData}
              data={coursesYear}
            />
          )}
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(EducationalInfo);
