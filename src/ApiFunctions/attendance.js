import axios from "axios";
import api from "../api";
//add attendance
export const ADD_ATTENDANCE = (formData, name, course, course_year, date) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.addAttendance}`, {
        attendance: formData,
        takenBy: name,
        course,
        course_year,
        date,
      })
      .then((res) => {
        if (res.status === 201) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//get attendance
export const GET_ATTENDANCE = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getAttendance}`)
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//update attendance
export const UPDATE_ATTENDANCE = (_id,attendanceId, attendance) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${api.updateAttendance}${_id}`, {
        attendanceId: attendanceId,
        attendanceValue: attendance,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};


//delete attendance
export const DELETE_ATTENDANCE = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}${api.deleteAttendance}${id}`)
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};