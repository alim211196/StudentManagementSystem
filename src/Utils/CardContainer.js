import { Box, CircularProgress, Grid } from "@mui/material";
import React, { memo } from "react";
import CustomCard from "./CustomCard";
import DataNotFound from "./DataNotFound";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

const CardContainer = ({
  parentComp,
  handleEdit,
  handleOpen,
  data,
  loading,
}) => {
  const [cookies] = useCookies(["theme"]);
  const { userData } = useSelector((state) => state.getUserProfile);
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
    <Box sx={{ mt: 1 }}>
      {data &&
      data.filter(
        (i) =>
          i?.course === userData?.course &&
          i?.course_year === userData?.course_year
      ).length > 0 ? (
        <Grid container spacing={2} sx={ConditionOnGrid}>
          {data
            .filter(
              (i) =>
                i?.course === userData?.course &&
                i?.course_year === userData?.course_year
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
