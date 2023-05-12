import { Button, Container, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTheme from "../../Utils/CustomTheme";
import MiniDrawer from "../Drawer";
import { useCookies } from "react-cookie";
import TitleBox from "../../Utils/TitleBox";
import {
  People,
  PersonAddAlt1,
  PersonSearch,
  ArrowBack,
} from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddStudents from "./AddStudents/index";
import ViewStudents from "./ViewRecords/index";
import { GET_STUDENTS } from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { useDispatch, useSelector } from "react-redux";
import { TabPanel, a11yProps } from "../../Utils/TabPanel";
import ExcelExport from "../../Utils/ExcelExport";
const ManageStudent = () => {
  const { userData } = useSelector((state) => state.getUserProfile);
  const dispatch = useDispatch();
  const [cookies] = useCookies(["theme", "UserId"]);
  const [flag, setFlag] = useState(false);
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getStudentData = () => {
    GET_STUDENTS()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  useEffect(() => {
    setLoading(true);
    GET_STUDENTS()
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        errorHandler(err?.status, err?.data, dispatch);
      });
  }, [dispatch]);

  const backFun = () => {
    getStudentData();
    setFlag(false);
  };
  return (
    <CustomTheme>
      <MiniDrawer
        setQuery={setQuery}
        query={query}
        data={data}
        flag={false}
        value={value}
      >
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <TitleBox
            icon={
              <People
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
              />
            }
            text={"Manage Students"}
          />

          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <PersonAddAlt1 />
                      <Typography sx={{ ml: 1 }}>Add Student</Typography>
                    </Box>
                  }
                  {...a11yProps(0)}
                  sx={{
                    textTransform: "capitalize",
                    color: cookies.theme === "dark" && "#fff",
                    "&.Mui-selected": {
                      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                      background: cookies.theme === "dark" && "#4f4f4f",
                      border: cookies.theme === "dark" && "1px solid #1976D2",
                      borderRadius: "5px",
                    },
                  }}
                />
                <Tab
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <PersonSearch />
                      <Typography sx={{ ml: 1 }}>View Students</Typography>
                    </Box>
                  }
                  {...a11yProps(1)}
                  sx={{
                    textTransform: "capitalize",
                    color: cookies.theme === "dark" && "#fff",
                    "&.Mui-selected": {
                      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                      background: cookies.theme === "dark" && "#4f4f4f",
                      border: cookies.theme === "dark" && "1px solid #1976D2",
                      borderRadius: "5px",
                    },
                  }}
                />
              </Tabs>
              <>
                {flag === true && value === 1 && (
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBack />}
                    sx={{
                      textTransform: "capitalize",
                      color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                      background: cookies.theme === "dark" && "#1976D2",
                    }}
                    onClick={backFun}
                  >
                    Back
                  </Button>
                )}
                {flag === false && value === 1 && (
                  <ExcelExport
                    userData={userData}
                    data={data}
                    fileName={"student_records"}
                  />
                )}
              </>
            </Box>
            <TabPanel value={value} index={0} sx={{ p: 0 }}>
              <AddStudents />
            </TabPanel>
            <TabPanel value={value} index={1} sx={{ p: 0 }}>
              <ViewStudents
                flag={flag}
                setFlag={setFlag}
                loading={loading}
                setLoading={setLoading}
                data={data}
                setData={setData}
                getStudentData={getStudentData}
                setQuery={setQuery}
                query={query}
              />
            </TabPanel>
          </Box>
        </Container>
      </MiniDrawer>
    </CustomTheme>
  );
};

export default ManageStudent;
