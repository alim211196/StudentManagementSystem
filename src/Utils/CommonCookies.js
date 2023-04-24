export const DarkFFF = (cookies) => {
  return cookies.theme === "dark" && "#fff";
};

export const Dark4F = (cookies) => {
  return cookies.theme === "dark" && "#4f4f4f";
};

export const Dark4F29 = (cookies) => {
  return cookies.theme === "dark" && "#292929";
};

export const DarkB5 = (cookies) => {
  return cookies.theme === "dark" && "#B5B5B5";
};

export const DarkFF4F = (cookies) => {
  return cookies.theme === "dark" ? "#fff !important" : "#4f4f4f !important";
};

export const Dark00 = (cookies) => {
  return cookies.theme === "dark" ? "#292929" : "#E7EBF0";
};

export const BeforeLoginCard = (cookies) => {
  return cookies.theme === "dark" ? "#292929 !important" : "#fff !important";
};

export const Dark00FF = (cookies) => {
  return cookies.theme === "dark" ? "#4f4f4f" : "#fff";
};

export const Light4F = (cookies, matches) => {
  return cookies.theme === "light" && !matches ? "#4f4f4f" : "#fff";
};

export const DarkBorder = (cookies) => {
  return cookies.theme === "dark" && "1px solid #4f4f4f";
};
export const LightBorder = (cookies, matches) => {
  return cookies.theme === "light" && !matches && "1px solid #4f4f4f";
};
export const Dark004F = (cookies) => {
  return cookies.theme === "dark" ? "#292929" : "#E0E3E7";
};

export const DarkD4D4 = (cookies) => {
  return cookies.theme === "dark" && "#D4D4D4";
};

export const DarkThin4f4f = (cookies) => {
  return cookies.theme === "dark" && "thin solid #4f4f4f";
};

export const FooterBorder = (cookies) => {
  return cookies.theme === "dark" ? "1px solid #4f4f4f" : "1px solid #F0F0F0";
};

export const CardBorder = (cookies, bdColor) => {
  return cookies.theme === "dark"
    ? `1px solid ${bdColor}`
    : "1px solid #E7EBF0";
};

