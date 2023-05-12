import React, { memo } from "react";
import PaperWrapper from "./PaperWrapper";
import { Grid } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { Gender } from "./DropdownArray";
import CustomDateTextField from "./CustomDateTextField";
import CustomDropDown from "./CustomDropDown";
import { Person } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { Box, IconButton, Tooltip } from "@mui/material";
import { PhotoCamera, HighlightOff } from "@mui/icons-material";
import { Dark00 } from "./CommonCookies";

const PersonalInfo = ({
  handleFileInputChange,
  selectedFile,
  handleClear,
  cookies,
  formData,
  setFormData,
}) => {
  return (
    <PaperWrapper
      cookies={cookies}
      boxBGColor={"#EF5350"}
      icon={<Person />}
      text={"Personal Info :"}
    >
      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={3} md={3}>
          <Box sx={{ pt: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={selectedFile}
                alt="user Edit Profile"
                variant="circular"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "1px solid #EF5350",
                  background: Dark00(cookies),
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  name="profileImage"
                  accept="image/*"
                  type="file"
                  onChange={handleFileInputChange}
                />
                <Tooltip title="Select Image" placement="left">
                  <PhotoCamera sx={{ fontSize: "20px" }} />
                </Tooltip>
              </IconButton>

              <IconButton onClick={handleClear}>
                <Tooltip title="Remove Image" placement="right">
                  <HighlightOff sx={{ fontSize: "20px" }} />
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid container item xs={12} sm={9} md={9} spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12} sm={6} md={6}>
            <CustomTextField
              label={"Full name"}
              name="fullname"
              value={formData.fullname}
              setFormData={setFormData}
              type="text"
              disabled={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <CustomTextField
              label={"Email Address"}
              name="email"
              value={formData.email}
              setFormData={setFormData}
              type="email"
              disabled={false}
            />
          </Grid>
          {window.location.pathname === "/manage-students" && (
            <Grid item xs={12} sm={6} md={6}>
              <CustomTextField
                label={"Roll number"}
                name="roll_no"
                value={formData.roll_no}
                setFormData={setFormData}
                type="number"
                disabled={false}
              />
            </Grid>
          )}

          <Grid item xs={12} sm={6} md={6}>
            <CustomTextField
              label={"Mobile number"}
              name="phone"
              value={formData.phone}
              setFormData={setFormData}
              type="number"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomDateTextField
              label={"Date of birth"}
              name="dob"
              value={formData.dob}
              setFormData={setFormData}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomDropDown
              label={"Gender"}
              name="gender"
              value={formData.gender}
              setFormData={setFormData}
              data={Gender}
            />
          </Grid>
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default memo(PersonalInfo);
