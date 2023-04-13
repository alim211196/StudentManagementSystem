export const DashboardStyle = () => {
  const MainContainer = {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    parentBox = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar = {
      width: 56,
      height: 56,
    },
    iconBtn = {
      position: "absolute",
      left: 60,
      color: "#fff",
      top: 60,
      cursor: "pointer",
    },
    iconBtnAvatar = {
      width: 28,
      height: 28,
    },
    innerBox = {
      mt: 3,
    };
  return {
    MainContainer,
    parentBox,
    avatar,
    iconBtn,
    iconBtnAvatar,
    innerBox,
  };
};
