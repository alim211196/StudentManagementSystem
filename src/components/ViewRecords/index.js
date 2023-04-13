import React, { useEffect, useState } from "react";
import MiniDrawer from "../Drawer";
import CustomTheme from "../../Utils/CustomTheme";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import Forms from "../Dashboard/Forms";
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
const ViewRecords = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [ID, setID] = useState("");
  const [flag, setFlag] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
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
  });

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
    GET_STUDENTS()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
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
          const date = new Date(data.dob);
          const formattedDate = date.toISOString().substring(0, 10);
          setFormData({
            fullName: data.fullName,
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
          });
          setFlag(true);
        }
      })
      .catch((err) => {
        errorHandler(err?.status, err?.data, dispatch);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UPDATE_STUDENT(ID, formData)
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
    ["fullName", "email", "phone"],
    query,
    data
  );

  return (
    <CustomTheme>
      <MiniDrawer setQuery={setQuery} query={query} data={data}>
        {flag === false ? (
          <CardContainer
            setQuery={setQuery}
            query={query}
            parentComp={"View Records"}
            handleEdit={handleEdit}
            handleOpen={handleOpen}
            data={newResults}
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
          />
        )}
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
