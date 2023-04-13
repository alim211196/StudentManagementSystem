import {
  ListItem,
  ListItemButton,
  Tooltip,
  ListItemText,
  Avatar,
} from "@mui/material";
import React, { memo } from "react";
import CustomTheme from "../../../Utils/CustomTheme";
const LowerIcons = ({ icon, text, altText, open, setDialogOpen, styles }) => {
  return (
    <CustomTheme>
      <ListItem disablePadding sx={styles.dynamicListItem}>
        <ListItemButton
          sx={styles.listItemBtn}
          onClick={() => setDialogOpen(true)}
        >
          <Tooltip title={!open && text} placement="right">
            <Avatar
              src={icon}
              variant="square"
              alt={altText}
              sx={styles.innerAvatar}
            />
          </Tooltip>
          <ListItemText primary={text} sx={styles.listItemText} />
        </ListItemButton>
      </ListItem>
    </CustomTheme>
  );
};

export default memo(LowerIcons);
