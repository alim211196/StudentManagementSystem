import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../../app/reducer/Snackbar";
import Forms from "../AddStudents/Forms";
import DialogBox from "../../../Utils/DialogBox";
import CardContainer from "../../../Utils/CardContainer";
import { SearchWithFuse } from "../../../Utils/SearchWithFuse";
import {
  DELETE_STUDENT,
  GET_STUDENT_BY_ID,
  UPDATE_STUDENT,
} from "../../../ApiFunctions/students";
import { errorHandler } from "../../../ApiFunctions/ErrorHandler";
const ViewRecords = ({
  flag,
  setFlag,
  setLoading,
  loading,
  data,
  setData,
  getStudentData,
  setQuery,query
}) => {
  const dispatch = useDispatch();
  const [ID, setID] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    roll_no: null,
    dob: "",
    gender: "male",
    course: "bca",
    course_year: "first year",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
    role: "Student",
  });

  

  const handleClose = () => {
    setDialogOpen(false);
    setID("");
  };
  const handleOpen = (flag, id) => {
    setDialogOpen(flag);
    setID(id);
  };
  const handleDelete = () => {
    DELETE_STUDENT(ID)
      .then((res) => {
        getStudentData();
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
  const handleEdit = (id) => {
    GET_STUDENT_BY_ID(id)
      .then((res) => {
        if (id === res.data._id) {
          setID(id);
          const data = res.data;
          const date = new Date(data.dob);
          const formattedDate = date.toISOString().substring(0, 10);
          setFormData({
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            roll_no: data.roll_no,
            dob: formattedDate,
            gender: data.gender,
            course: data.course,
            course_year: data.course_year,
            address: data.address,
            city: data.city,
            pinCode: data.pinCode,
            state: data.state,
            country: data.country,
            role: data.role,
          });
          setSelectedFile(data.profileImage);
          setFlag(true);
        }
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

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
      ...formData,
      profileImage: selectedFile,
    };
    UPDATE_STUDENT(ID, newFormData)
      .then((res) => {
        dispatch(
          openSnackbar({
            message: res.data,
            severity: "success",
          })
        );
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };
  const newResults = SearchWithFuse(
    ["fullname", "email", "phone", "course", "course_year"],
    query,
    data
  );

  return (
    <>
      {flag === false ? (
        <CardContainer
          setQuery={setQuery}
          query={query}
          parentComp={"View Records"}
          handleEdit={handleEdit}
          handleOpen={handleOpen}
          data={newResults}
          flag={flag}
          loading={loading}
        />
      ) : (
        <Forms
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          title={"Please update student details properly"}
          flag={"update"}
          setFlag={setFlag}
          getStudentData={getStudentData}
          handleFileInputChange={handleFileInputChange}
          handleClear={handleClear}
          selectedFile={selectedFile}
        />
      )}
      <DialogBox
        open={dialogOpen}
        handleClose={handleClose}
        handleChange={handleDelete}
        text={"Are your sure you want to delete this?"}
      />
    </>
  );
};

export default memo(ViewRecords);
