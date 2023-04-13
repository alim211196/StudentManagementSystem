import React, { memo } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomTheme from "../../../Utils/CustomTheme";
const CustomListItem = ({ item, open,styles }) => {
  const navigate = useNavigate();
  return (
    <CustomTheme>
      <ListItemButton
        sx={styles.listItemBtn}
        onClick={() => navigate(item.path)}
      >
        <Tooltip title={!open && item.title} placement="right">
          <Avatar
            src={item.icon}
            variant="square"
            alt={item.title}
            sx={styles.innerAvatar}
          />
        </Tooltip>
        <ListItemText primary={item.title} sx={styles.listItemText} />
      </ListItemButton>
    </CustomTheme>
  );
};

export default memo(CustomListItem);
