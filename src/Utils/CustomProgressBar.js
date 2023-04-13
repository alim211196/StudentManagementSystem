import React, { memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const CustomProgressBar = () => {
  const progress = useSelector((state) => state.progressBar);
  return <div>{progress && <CircularProgress variant="determinate" />}</div>;
};

export default memo(CustomProgressBar);
