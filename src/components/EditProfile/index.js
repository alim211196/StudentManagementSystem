import { Container, CssBaseline } from "@mui/material";
import React from "react";
import CustomTheme from "../../Utils/CustomTheme";
import MiniDrawer from "../Drawer";
import ChangePassword from "./EditProfileSubComponent/ChangePassword";
import ChangeProfile from "./EditProfileSubComponent/ChangeProfile";
import { useCookies } from "react-cookie";
import { ProfileStyle } from "./styles";

const EditProfile = () => {
    const [cookies] = useCookies(["theme"]);
     const styles = ProfileStyle(cookies);
  return (
    <CustomTheme>
      <MiniDrawer>
        <Container component="main" maxWidth="lg" sx={styles.parentContainer}>
          <CssBaseline />
          <ChangeProfile styles={styles} />
          <ChangePassword styles={styles} />
        </Container>
      </MiniDrawer>
    </CustomTheme>
  );
};

export default EditProfile;
