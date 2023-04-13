import React,{memo} from "react";
import { StyledAvatar } from "./stylingMethods";
import CustomTheme from "./CustomTheme";

const CustomAvatar = ({ children }) => {
  return (
    <CustomTheme>
      <StyledAvatar>{children}</StyledAvatar>
    </CustomTheme>
  );
};
export default memo(CustomAvatar);
