import { Box, Grid } from "@mui/material";
import React, { memo, useState } from "react";
import CustomDatePicker from "./CustomDatePicker";
import StudentCards from "./StudentCards";
import DialogBox from "../../../Utils/DialogBox";
import { DELETE_ATTENDANCE } from "../../../ApiFunctions/attendance";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../../app/reducer/Snackbar";
import { errorHandler } from "../../../ApiFunctions/ErrorHandler";

const ViewAttendance = ({
  cookies,
  AttData,
  userData,
  data,
  getAttendance,
  deleteFlag,
}) => {
  const inputDate = new Date();
  const isoDate = inputDate.toISOString();
  const formattedDate = isoDate.slice(0, 10);
  const [startDate, setStartDate] = useState(formattedDate);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [ID, setID] = useState("");
  const dispatch = useDispatch();
  const Attendance_Data = AttData.filter(
    (i) =>
      i.date === startDate &&
      i?.course === userData?.course &&
      i?.course_year === userData?.course_year
  );
  const filteredStudents = data.filter((student) =>
    Attendance_Data[0]?.attendance.some(
      (attendance) => attendance._id === student._id
    )
  );
  const ExportData = filteredStudents.map((obj) => ({
    attendance_date: Attendance_Data[0]?.date,
    ...obj,
    attendance:
      Attendance_Data[0]?.attendance.find(
        (attendance) => attendance._id === obj._id
      )?.attendance === true
        ? "Present"
        : "Absent",
  }));

  const handleClose = () => {
    setDialogOpen(false);
    setID("");
  };
  const handleOpen = () => {
    setDialogOpen(true);
    setID(Attendance_Data[0]?._id);
  };

  const deleteAttendance = () => {
    DELETE_ATTENDANCE(ID)
      .then((res) => {
        getAttendance();
        dispatch(
          openSnackbar({
            message: res.data,
            severity: "success",
          })
        );
        handleClose();
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };
  return (
    <>
      <Box>
        <CustomDatePicker
          cookies={cookies}
          startDate={startDate}
          setStartDate={setStartDate}
          ExportData={ExportData}
          userData={userData}
          AttData={AttData}
          handleOpen={handleOpen}
          deleteFlag={deleteFlag}
        />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {filteredStudents.map((stud, index) => {
            return (
              <Grid item xs={12} sm={4} md={3} lg={3} key={stud._id}>
                <StudentCards
                  name={stud.fullname}
                  cookies={cookies}
                  icon={stud.profileImage}
                  present={
                    Attendance_Data?.filter(
                      (i) => i.date === startDate
                    )[0]?.attendance.find(
                      (attendance) => attendance._id === stud._id
                    )?.attendance
                  }
                  attendanceId={
                    Attendance_Data?.filter(
                      (i) => i.date === startDate
                    )[0]?.attendance.find(
                      (attendance) => attendance._id === stud._id
                    )?._id
                  }
                  _id={
                    Attendance_Data?.filter((i) => i.date === startDate)[0]?._id
                  }
                  getAttendance={getAttendance}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <DialogBox
        open={dialogOpen}
        handleClose={handleClose}
        handleChange={deleteAttendance}
        text={"Are your sure you want to delete this attendance?"}
      />
    </>
  );
};

export default memo(ViewAttendance);
