import { Box, CircularProgress, Grid } from "@mui/material";
import React, { memo, useState } from "react";
import CustomCard from "./CustomCard";
import DataNotFound from "./DataNotFound";
import { useCookies } from "react-cookie";
import CourseFilter from "./CourseFilter";

const CardContainer = ({
  parentComp,
  handleEdit,
  handleOpen,
  data,
  loading,
  flag,
}) => {
  const [cookies] = useCookies(["theme"]);
  const [formData, setFormData] = useState({
    course: "bca",
    course_year: "first year",
  });
  const styleOnGrid = {
    display: "flex",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
  };
  const ConditionOnGrid = () => {
    if (data.length < 1) {
      return styleOnGrid;
    }
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      {flag === false && (
        <CourseFilter
          cookies={cookies}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {data &&
      data.filter(
        (i) =>
          i.course === formData.course && i.course_year === formData.course_year
      ).length > 0 ? (
        <Grid container spacing={2} sx={ConditionOnGrid}>
          {data
            .filter(
              (i) =>
                i.course === formData.course &&
                i.course_year === formData.course_year
            )
            .map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <CustomCard
                    parentComp={parentComp}
                    handleEdit={handleEdit}
                    item={item}
                    handleOpen={handleOpen}
                    cookies={cookies}
                  />
                </Grid>
              );
            })}
        </Grid>
      ) : (
        <Box sx={({ marginTop: "10px" }, styleOnGrid)}>
          {" "}
          {loading ? <CircularProgress color="inherit" /> : <DataNotFound />}
        </Box>
      )}
    </Box>
  );
};

export default memo(CardContainer);
