import React, { memo } from "react";
import {
  CardActionArea,
  CardActions,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardName } from "./CardName";
import useMediaQuery from "@mui/material/useMediaQuery";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "./stylingMethods";
import { useCookies } from "react-cookie";
import { Dark00, DarkFFF } from "./CommonCookies";
const CustomCard = ({ item, handleEdit, handleOpen, parentComp }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [cookies] = useCookies(["theme"]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const matches = useMediaQuery("(min-width:600px)");

  const hiddenStyle = {
    width: matches ? "100%" : "17rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color:DarkFFF(cookies),
  };

  // const randomIndex = Math.floor(Math.random() * colors.length);
  // const bgColor = colors[randomIndex];
  const cookieCondition = () => {
    if (cookies.theme === "dark") {
      return {
        boxShadow: "0px 0px 6px 3px #292929",
        background: "#000",
        color: "#fff",
        border: "1px solid #4f4f4f",
      };
    } else {
      return {
        boxShadow: "0px 0px 6px 3px #292929",
      };
    }
  };

  return (
    <Card sx={cookieCondition()}>
      <CardActionArea
        onClick={() => parentComp === "View Records" && handleEdit(item._id)}
      >
        <CardMedia
          component="div"
          sx={{
            background: "radial-gradient(circle at center, #DC143C , #292929)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <Avatar
            sx={{
              background:Dark00(cookies),
              color: "#DC143C",
              width: 80,
              height: 80,
              fontSize: "40px",
            }}
          >
            {CardName(`${item.fullName}`)}
          </Avatar>
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5" 
            component="div"
            sx={({ textTransform: "capitalize" }, hiddenStyle)}
          >
            {item.fullName}
          </Typography>
          <Typography variant="p">Email:</Typography>
          <Typography variant="body2" color="text.secondary" sx={hiddenStyle}>
            {item.email}
          </Typography>
          <Typography variant="p">Phone:</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: DarkFFF(cookies) }}
          >
            {item.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {parentComp !== "View Message" && (
          <Tooltip title="Edit" placement="top">
            <IconButton onClick={() => handleEdit(item._id)}>
              <EditIcon sx={{ fontSize: 20, color: "#DC143C" }} />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Delete" placement="top">
          <IconButton onClick={() => handleOpen(true, item._id)}>
            <DeleteIcon sx={{ fontSize: 20, color: "#DC143C" }} />
          </IconButton>
        </Tooltip>
        {parentComp === "View Message" && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
      {parentComp === "View Message" && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comment:</Typography>
            <Typography paragraph>{item?.comment}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

export default memo(CustomCard);
