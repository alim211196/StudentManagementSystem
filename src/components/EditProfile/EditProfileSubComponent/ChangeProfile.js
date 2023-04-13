import { Avatar, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomButton from "../../../Utils/CustomButton";
import CustomDivider from "../../../Utils/CustomDivider";
import CustomTextField from "../../../Utils/CustomTextField";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { openSnackbar } from "../../../app/reducer/Snackbar";
import { LoadingButton } from "@mui/lab";
import { IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { PhotoCamera, HighlightOff } from "@mui/icons-material";
import { UPDATE_USER } from "../../../ApiFunctions/users";
import { errorHandler } from "../../../ApiFunctions/ErrorHandler";
import { StyledBadge } from "../../../Utils/stylingMethods";
const ChangeProfile = ({ styles }) => {
  const matches = useMediaQuery("(min-width:900px)");
  const { userData } = useSelector((state) => state.getUserProfile);
  const [cookies] = useCookies(["UserId"]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [changeBtnState, setChangeBtnState] = useState(true);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFileInputChange = (e) => {
    let files = e.target.files;
    let fsize = files[0]?.size;

    const file = Math.round(fsize / 1024);

    if (file > 100) {
      dispatch(
        openSnackbar({
          message: "Please upload image less than 1MB.",
          severity: "error",
        })
      );
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setSelectedFile(e.target.result);
    };
  };
  const handleClear = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    setFormData({
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData?.email,
    });
    setSelectedFile(userData?.profileImage);
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataValues = new FormData(event.target);

    // Convert formData to an object
    const data = {};
    for (let [key, value] of formDataValues.entries()) {
      data[key] = value;
    }
    // Check if all fields are filled
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      profileImage: selectedFile,
    };

    UPDATE_USER(cookies.UserId, newFormData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: res.data,
            severity: "success",
          })
        );
        window.location.reload();
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  const ButtonUI = () => {
    return (
      <>
        {changeBtnState ? (
          <LoadingButton
            type="submit"
            variant="contained"
            onClick={() => setChangeBtnState(false)}
            sx={styles.editProfileBtn}
          >
            {"Edit Profile"}
          </LoadingButton>
        ) : (
          <CustomButton text={"Update Profile"} removeMargin={true} />
        )}
      </>
    );
  };

  return (
    <Box sx={styles.parentBox}>
      <Box sx={styles.childBox}>
        <Box sx={styles.subChildBox1}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src={selectedFile}
              alt="user Edit Profile"
              sx={styles.editProfileAvatar}
            />
          </StyledBadge>
        </Box>
        <Box sx={styles.subChildBox1}>
          <IconButton
            aria-label="upload picture"
            component="label"
            disabled={changeBtnState}
          >
            <input
              hidden
              name="profileImage"
              accept="image/*"
              type="file"
              onChange={handleFileInputChange}
              disabled={changeBtnState}
            />
            <Tooltip title="Select Image" placement="left">
              <PhotoCamera sx={styles.imageIcon} />
            </Tooltip>
          </IconButton>

          <IconButton onClick={handleClear} disabled={changeBtnState}>
            <Tooltip title="Remove Image" placement="right">
              <HighlightOff sx={styles.imageIcon} />
            </Tooltip>
          </IconButton>
        </Box>
        <CustomDivider title={"Edit your profile"} />
        <Box component="form" sx={styles.subChildBox2} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CustomTextField
                label={"First name"}
                name="firstName"
                value={formData.firstName}
                setFormData={setFormData}
                type="text"
                disabled={changeBtnState}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomTextField
                label={"Last name"}
                name="lastName"
                value={formData.lastName}
                setFormData={setFormData}
                type="text"
                disabled={changeBtnState}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CustomTextField
                label={"Email"}
                name="email"
                value={formData.email}
                setFormData={setFormData}
                type="email"
                disabled={true}
              />
            </Grid>
            {matches && <Grid item xs={false} sm={false} md={4} />}
            <Grid item xs={12} sm={6} md={4}>
              <ButtonUI />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangeProfile;
