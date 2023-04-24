import React, { memo } from "react";
import Box from "@mui/material/Box";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CustomTheme from "../../Utils/CustomTheme";
import { useCookies } from "react-cookie";
import TitleBox from "../../Utils/TitleBox";
import PersonalInfo from "../../Utils/PersonalInfo";
import EducationalInfo from "../../Utils/EducationalInfo";
import AddressInfo from "../../Utils/AddressInfo";
import FormButton from "../../Utils/FormButton";
const Forms = ({
  selectedFile,
  handleSubmit,
  formData,
  setFormData,
  flag,
  setFlag,
  getStudentData,
  handleFileInputChange,
  handleClear,
}) => {
  const [cookies] = useCookies(["theme"]);
  // const styles = DashboardStyle(matches);

  const backFun = () => {
    getStudentData();
    setFlag(false);
  };

  return (
    <CustomTheme>
      <TitleBox
        icon={
          <PersonAddAlt1Icon
            sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
          />
        }
        text={flag === "add" ? "Add Student" : "Update Student"}
        flag={flag}
        BackButtonCondition={backFun}
      />

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <PersonalInfo
          handleFileInputChange={handleFileInputChange}
          handleClear={handleClear}
          cookies={cookies}
          formData={formData}
          setFormData={setFormData}
          selectedFile={selectedFile}
        />
        <EducationalInfo
          cookies={cookies}
          formData={formData}
          setFormData={setFormData}
        />
        <AddressInfo
          cookies={cookies}
          formData={formData}
          setFormData={setFormData}
        />
        <FormButton cookies={cookies} text={"Submit Your Form"} />
      </Box>
    </CustomTheme>
  );
};
export default memo(Forms);
