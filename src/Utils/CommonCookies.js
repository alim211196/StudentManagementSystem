export const DarkFFF = (cookies) => {
  return cookies.theme === "dark" && "#fff";
};

export const Dark4F = (cookies) => {
  return cookies.theme === "dark" && "#4f4f4f";
};

export const DarkFF4F = (cookies) => {
  return cookies.theme === "dark" ? "#fff" : "#4f4f4f";
};

export const Dark00 = (cookies) => {
  return cookies.theme === "dark" && "#000";
};

export const Dark00FF = (cookies) => {
  return cookies.theme === "dark" ? "#000" :"#fff";
};

export const Light4F = (cookies,matches) => {
  return cookies.theme === "light" && !matches ? "#4f4f4f" : "#fff";
};

export const DarkBorder= (cookies) => {
  return cookies.theme === "dark" && "1px solid #4f4f4f";
};
export const LightBorder = (cookies, matches) => {
  return cookies.theme === "light" && !matches && "1px solid #4f4f4f";
};
export const Dark004F = (cookies) => {
  return cookies.theme === "dark" ? "#000" : "#F0F0F0";
};

export const DarkD4D4 = (cookies) => {
  return cookies.theme === "dark" && "#D4D4D4";
};

export const DarkThin4f4f = (cookies) => {
  return cookies.theme === "dark" && "thin solid #4f4f4f";;
};

