import React, { memo } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "../app/reducer/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CustomSnackbar = () => {
  const dispatch = useDispatch();

  const { isOpen, message, severity } = useSelector((state) => state.snackbar);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeSnackbar());
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default memo(CustomSnackbar);
