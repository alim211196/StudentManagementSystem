import React, { memo } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CustomSnackbar = ({ open, handleClose, state }) => {

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={state.severity}
        sx={{ width: "100%" }}
      >
        {state.message}
      </Alert>
    </Snackbar>
  );
};

export default memo(CustomSnackbar);