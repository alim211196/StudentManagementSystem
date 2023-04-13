import React,{memo} from "react";
import { useScrollTrigger } from "@mui/material";

const FadeOnScroll = ({children}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <div
      style={{
        opacity: trigger ? 0.5 : 1,
        transition: "opacity 2s",
      }}
    >
      {children}
    </div>
  );
};

export default memo(FadeOnScroll);
