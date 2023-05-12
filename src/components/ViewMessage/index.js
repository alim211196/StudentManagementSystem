import React, { useEffect, useState } from "react";
import CustomTheme from "../../Utils/CustomTheme";
import MiniDrawer from "../Drawer";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../app/reducer/Snackbar";
import DialogBox from "../../Utils/DialogBox";
import CardContainer from "../../Utils/CardContainer";
import { SearchWithFuse } from "../../Utils/SearchWithFuse";
import { DELETE_COMMENT, GET_COMMENTS } from "../../ApiFunctions/students";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import { Container, CssBaseline } from "@mui/material";
import TitleBox from "../../Utils/TitleBox";
import {
  Sms,

} from "@mui/icons-material";
import { useCookies } from "react-cookie";
const ViewMessage = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [data, setData] = useState([]);
  const [ID, setID] = useState("");

  const [cookies] = useCookies(["theme"]);
  
  const getStudentComment = () => {
   GET_COMMENTS()
     .then((res) => {
       setData(res.data);
     })
     .catch((err) => {
       errorHandler(err?.status, err?.data, dispatch);
     });
  };

  useEffect(() => {
    GET_COMMENTS()
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
    DELETE_COMMENT(ID)
      .then((res) => {
        getStudentComment();
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

  const newResults = SearchWithFuse(
    ["fullname", "email", "phone"],
    query,
    data
  );
  return (
    <CustomTheme>
      <MiniDrawer
        setQuery={setQuery}
        query={query}
        data={data}
        flag={false}
        value={1}
      >
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <TitleBox
            icon={
              <Sms
                sx={{ color: cookies.theme === "dark" ? "#fff" : "#1976D2" }}
              />
            }
            text={"View Messages"}
          />
          <CardContainer
            flag={false}
            parentComp={"View Message"}
            handleOpen={handleOpen}
            data={newResults}
          />
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

export default ViewMessage;
