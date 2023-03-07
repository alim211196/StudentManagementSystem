import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import styles from "./styles";
import { Container, IconButton, Tooltip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import CustomSnackbar from "../Common/CustomSnackbar";
import Forms from "../Common/Forms";
import { useNavigate } from "react-router-dom";
import CustomTheme from "../Common/CustomTheme";

const TableIndex = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [state, setState] = React.useState({
    severity: "",
    message: "success",
  });
  const [open, setOpen] = useState(false);
  const [flag, setflag] = useState(false);
  const [studId, setstudId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "male",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
  });

  const getStudentsData = () => {
    axios
      .get("http://localhost:3000/students")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  function handleClose() {
    setOpen(false);
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/students/${id}`)
      .then((response) => {
        setState({
          message: "Deleted Successfully.",
          severity: "success",
        });
        setOpen(true);
        getStudentsData();
      })
      .catch((error) => {
        setState({
          message: "Not Deleted",
          severity: "error",
        });
        setOpen(true);
      });
  };
  const handleEdit = (id) => {
    axios
      .get(`http://localhost:3000/students/${id}`)
      .then((response) => {
        setstudId(response.data._id);
        if (id === response.data._id) {
          const data = response.data;
          const date = new Date(data.dob);
          const formattedDate = date.toISOString().substring(0, 10);
          setFormData({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            dob: formattedDate,
            gender: data.gender,
            address: data.address,
            city: data.city,
            pinCode: data.pinCode,
            state: data.state,
            country: data.country,
          });
          setflag(true);
        }
      })
      .catch((error) => {});
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/students/${studId}`, formData)
      .then((response) => {
        if (response.status === 200) {
          setState({
            message: "Updated Successfully.",
            severity: "success",
          });
          setOpen(true);
          navigate("/thankyou");
        }
      })
      .catch((error) => {
        setState({
          message: "Not Updated",
          severity: "error",
        });
        setOpen(true);
      });
  };

  const columns = [
    {
      label: " ",
      name: "_id",
      align: "left",
      options: {
        display: "none",
      },
    },
    {
      name: "fullName",
      label: "Full name",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email address",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "phone",
      label: "Mobile number",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      label: "Date of birth",
      name: "dob",
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const date = new Date(tableMeta.rowData[4]);
          const formattedDate = date.toISOString().substring(0, 10);
          return (
            <Typography
              component={"span"}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                component={"span"}
              >
                {formattedDate}
              </Typography>
            </Typography>
          );
        },
      },
    },

    {
      name: "gender",
      label: "Gender",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "address",
      label: "Address",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "pinCode",
      label: "Marital status",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "country",
      label: "Country",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      label: "Action",
      name: "Action",
      options: {
        filter: false,
        sort: false,

        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <Tooltip title="Edit" placement="bottom">
                <IconButton onClick={() => handleEdit(tableMeta.rowData[0])}>
                  <EditIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete" placement="bottom">
                <IconButton onClick={() => handleDelete(tableMeta.rowData[0])}>
                  <DeleteIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    responsive: "simple",
    tableBodyHeight: "76vh",
    print: false,
    search: false,
    rowHover: false,
    viewColumns: false,
    download: false,
    filter: false,
    elevation: 0,
    selectableRows: "none",
  };
  return (
    <CustomTheme>
      {flag === false ? (
        <Container
          maxWidth="xxl"
          component="main"
          sx={{
            paddingTop: "4.1rem",
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
          }}
        >
          <ThemeProvider theme={styles.useTableTheme()}>
            <MUIDataTable columns={columns} data={data} options={options} />
          </ThemeProvider>
        </Container>
      ) : (
        <Forms
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          title={"Please update your details properly"}
        />
      )}

      <CustomSnackbar handleClose={handleClose} open={open} state={state} />
    </CustomTheme>
  );
};
export default TableIndex;
