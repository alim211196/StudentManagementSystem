import { Container, CssBaseline } from "@mui/material";
import React from "react";
import CustomTheme from "../../Utils/CustomTheme";
import MiniDrawer from "../Drawer";
import ChangePassword from "./EditProfileSubComponent/PasswordIndex";
import ChangeProfile from "./EditProfileSubComponent/ChangeProfile";
import { useCookies } from "react-cookie";
import { ProfileStyle } from "./styles";
import TitleBox from "../../Utils/TitleBox";
import { AccountCircle } from "@mui/icons-material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const EditProfile = () => {
  const [cookies] = useCookies(["theme"]);
  const styles = ProfileStyle(cookies);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomTheme>
      <MiniDrawer>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <TitleBox
            icon={
              <AccountCircle
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
              />
            }
            text={"Edit Profile"}
          />
          <Box sx={{ width: "100%", mt: 2 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Change Profile"
                  {...a11yProps(0)}
                  sx={{
                    textTransform: "capitalize",
                    color: cookies.theme === "dark" &&  "#fff",
                    "&.Mui-selected": {
                      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                      background: cookies.theme === "dark" && "#1976D2",
                    },
                  }}
                />
                <Tab
                  label="Change Password"
                  {...a11yProps(1)}
                  sx={{
                    textTransform: "capitalize",
                    color: cookies.theme === "dark" &&  "#fff",
                    "&.Mui-selected": {
                      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                      background: cookies.theme === "dark" && "#1976D2",
                    },
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{ p: 0 }}>
              <ChangeProfile styles={styles} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ChangePassword styles={styles} />
            </TabPanel>
          </Box>
        </Container>
      </MiniDrawer>
    </CustomTheme>
  );
};

export default EditProfile;
