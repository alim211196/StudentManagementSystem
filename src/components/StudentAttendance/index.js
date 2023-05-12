import { Container, CssBaseline, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTheme from "../../Utils/CustomTheme";
import MiniDrawer from "../Drawer";
import { useCookies } from "react-cookie";
import TitleBox from "../../Utils/TitleBox";
import {
  CalendarMonth,
  PostAdd,
  ContentPasteSearch,
} from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabPanel, a11yProps } from "../../Utils/TabPanel";
import AddAttendance from "./AddAttendance";
import { Dark00FF, DarkFFF } from "../../Utils/CommonCookies";
import { useDispatch, useSelector } from "react-redux";
import { GET_STUDENTS } from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import GroupIcon from "@mui/icons-material/Group";
import ViewAttendance from "./ViewAttendance";
import { GET_ATTENDANCE } from "../../ApiFunctions/attendance";
const AttendanceIndex = () => {
  const [cookies, setCookie] = useCookies(["theme", "UserId"]);
  const { userData } = useSelector((state) => state.getUserProfile);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [AttData, setAttData] = useState([]);
  const [fullName, setFullName] = useState("");
  const [deleteFlag, setdeleteFlag] = useState(false)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const inputDate = new Date();
  const isoDate = inputDate.toISOString();
  const formattedDate = isoDate.slice(0, 10);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setLoading(true);
    GET_STUDENTS()
      .then((res) => {
        let data = res.data
          .filter(
            (i) =>
              i?.course === userData?.course &&
              i?.course_year === userData?.course_year
          )
          .map((it) => {
            return {
              ...it,
              attendance: false,
            };
          });
        if (
          res.data &&
          res.data.filter(
            (i) =>
              i?.course === userData?.course &&
              i?.course_year === userData?.course_year
          ).length > 0 &&
          status
        ) {
          setLoading(true);
        } else {
          setLoading(false);
        }
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        errorHandler(err?.status, err?.data, dispatch);
      });
  }, [cookies, userData, dispatch, value, formattedDate, status]);
  const getAttendance = () => {
    setLoading(false);
    GET_ATTENDANCE()
      .then((res) => {
        setAttData(res.data);
        const matchingAttendance = res.data.find(
          (i) =>
            i?.course === userData?.course &&
            i?.course_year === userData?.course_year &&
            i?.date === formattedDate
        );
        if (matchingAttendance) {
          setFullName(
            `Attendance already taken by ${
              matchingAttendance.takenBy === userData.fullname
                ? "You"
                : matchingAttendance.takenBy
            }.`
          );
          setdeleteFlag(matchingAttendance.takenBy === userData.fullname);
          setStatus(true);
        } else {
          setStatus(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setStatus(false);
        errorHandler(err?.status, err?.data, dispatch);
      });
  };
  useEffect(() => {
    getAttendance();
  }, [cookies, userData, dispatch, value, formattedDate]);

  return (
    <CustomTheme>
      <MiniDrawer>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <TitleBox
            icon={
              <CalendarMonth
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
              />
            }
            text={"Manage Attendance"}
          />
          <Box sx={{ width: "100%", mt: 2 }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
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
                      <PostAdd />
                      <Typography sx={{ ml: 1 }}>Add Attendance</Typography>
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
                      <ContentPasteSearch />
                      <Typography sx={{ ml: 1 }}>View Attendance</Typography>
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
            </Box>
            <TabPanel value={value} index={0} sx={{ p: 0 }}>
              {data && data.length > 0 ? (
                <>
                  <Paper
                    elevation={0}
                    sx={{
                      p: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      background: Dark00FF(cookies),
                    }}
                  >
                    <Typography
                      sx={{
                        color: cookies.theme === "dark" ? "#fff" : "#1976D2",
                        fontSize: "20px",
                        ml: 1,
                      }}
                    >
                      Date: {formattedDate}
                    </Typography>
                  </Paper>
                  <AddAttendance
                    formattedDate={formattedDate}
                    data={data}
                    setData={setData}
                    setCookie={setCookie}
                    cookies={cookies}
                    dispatch={dispatch}
                    setLoading={setLoading}
                    loading={loading}
                    fullName={fullName}
                    setFullName={setFullName}
                    setStatus={setStatus}
                    status={status}
                    userData={userData}
                  />
                </>
              ) : (
                <>
                  {loading === false && (
                    <Box
                      sx={{
                        height: "30vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <GroupIcon
                        sx={{
                          height: "80px",
                          width: "80px",
                          color: DarkFFF(cookies),
                        }}
                      />
                      <Typography
                        sx={{ fontSize: "20px", color: DarkFFF(cookies) }}
                      >
                        Students are not available in this batch.
                      </Typography>
                    </Box>
                  )}
                </>
              )}
            </TabPanel>
            <TabPanel value={value} index={1} sx={{ p: 0 }}>
              <ViewAttendance
                cookies={cookies}
                AttData={AttData}
                userData={userData}
                data={data}
                getAttendance={getAttendance}
                deleteFlag={deleteFlag}
              />
            </TabPanel>
          </Box>
        </Container>
      </MiniDrawer>
    </CustomTheme>
  );
};

export default AttendanceIndex;
