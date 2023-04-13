import React, { useState, useEffect, memo } from "react";
import CustomTheme from "./CustomTheme";
import { MaterialUISwitch } from "./stylingMethods";
import { useCookies } from "react-cookie";

const ModeComp = () => {
  const [theme, setTheme] = useState("");
  const [cookies, setCookie] = useCookies(["theme"]);

  const handleChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCookie("theme", newTheme);
  };
  useEffect(() => {
    const themeCookie = cookies.theme;
    if (themeCookie === "dark" || themeCookie === "light") {
      setTheme(themeCookie);
    } else {
      setTheme("light");
      setCookie("theme", "light");
    }
  }, [cookies.theme, setCookie]);
  return (
    <CustomTheme>
      <MaterialUISwitch checked={theme === "dark"} onChange={handleChange} />
    </CustomTheme>
  );
};

export default memo(ModeComp);
