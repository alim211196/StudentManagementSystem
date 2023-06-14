import React, { memo } from "react";
import Box from "@mui/material/Box";
import { useCookies } from "react-cookie";
import PersonalInfo from "../../../Utils/PersonalInfo";
import EducationalInfo from "../../../Utils/EducationalInfo";
import AddressInfo from "../../../Utils/AddressInfo";
import FormButton from "../../../Utils/FormButton";
const Forms = ({
  selectedFile,
  handleSubmit,
  formData,
  setFormData,
  handleFileInputChange,
  handleClear,
  loading,
}) => {
  const [cookies] = useCookies(["theme"]);
  // const styles = DashboardStyle(matches);

  return (
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
      <FormButton
        cookies={cookies}
        text={"Submit Your Form"}
        loading={loading}
      />
    </Box>
  );
};
export default memo(Forms);
