import { DarkFFF } from "../../Utils/CommonCookies";

export const ContactStyle = (cookies) => {
  const typo3 = {
      margin: 0,
      fontWeight: "bold",
      fontSize: "20px",
      color: DarkFFF(cookies),
    },
    typo4 = {
      margin: 0,
      fontWeight: 400,
      fontSize: "16px",
      color: DarkFFF(cookies),
    },
    MainContainer1 = {
      margin: "20px 0px",
      pl: 2,
      pr: 2,
      pt: 2,
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
