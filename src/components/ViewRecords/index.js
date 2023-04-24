import React, { useEffect, useState } from "react";
import MiniDrawer from "../Drawer";
import CustomTheme from "../../Utils/CustomTheme";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import Forms from "../AddStudents/Forms";
import DialogBox from "../../Utils/DialogBox";
import CardContainer from "../../Utils/CardContainer";
import { SearchWithFuse } from "../../Utils/SearchWithFuse";
import {
  DELETE_STUDENT,
  GET_STUDENTS,
  GET_STUDENT_BY_ID,
  UPDATE_STUDENT,
} from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { Container, CssBaseline } from "@mui/material";
import TitleBox from "../../Utils/TitleBox";
import { PersonSearch } from "@mui/icons-material";
import { useCookies } from "react-cookie";
const ViewRecords = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [ID, setID] = useState("");
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [cookies] = useCookies(["theme"]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
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

  const getStudentData = () => {
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
          console.log(data);
          const date = new Date(data.dob);
          const formattedDate = date.toISOString().substring(0, 10);
          setFormData({
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
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
      console.log(e.target.result);
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
    <CustomTheme>
      <MiniDrawer setQuery={setQuery} query={query} data={data} flag={flag}>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          {flag === false && (
            <TitleBox
              icon={
                <PersonSearch
                  sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
                />
              }
              text={"View Students"}
            />
          )}

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
        </Container>
      </MiniDrawer>
      <DialogBox
        open={dialogOpen}
        handleClose={handleClose}
        handleChange={handleDelete}
        text={"Are your sure you want to delete this?"}
      />
    </CustomTheme>
  );
};

export default ViewRecords;
