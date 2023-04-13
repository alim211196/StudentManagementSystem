import { DarkFFF } from "../../Utils/CommonCookies";

export const ContactStyle = (cookies) => {
  const typo3 = {
      margin: 0,
      fontWeight: "bold",
      fontSize: "24px",
      color: DarkFFF(cookies),
    },
    typo4 = {
      margin: 0,
      fontWeight: 400,
      fontSize: "18px",
      color: DarkFFF(cookies),
    },
    MainContainer1 = {
      margin: "20px 0px",
    },
    normalBox = {
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    OverrideBox = {
      height: "100%",
      width: "100%",
    },
    innerBox = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  return {
    typo3,
    typo4,
    MainContainer1,
    normalBox,
    OverrideBox,
    innerBox,
  };
};
