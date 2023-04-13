import { Dark00, Dark00FF, DarkFFF } from "../../Utils/CommonCookies";

export const DrawerStyle = (cookies, matches, upDown, open) => {
  const path = ["/view-records", "/view-messages"].includes(
    window.location.pathname
  );

  const CommonStyle = "4rem 1rem 0rem";

  const paddingStyle = () => {
    if (!matches && upDown) {
      if (path) {
        return "7rem 1rem 0rem";
      } else {
        return CommonStyle;
      }
    } else if (!matches && !upDown) {
      return CommonStyle;
    } else if (matches) {
      if (path) {
        return CommonStyle;
      } else {
        return CommonStyle;
      }
    } else {
      return "4rem 0rem 0rem";
    }
  };

  const parentBox = {
      display: "flex",
    },
    drawerHeader1 = {
      background: "#292929",
    },
    innerBox1 = {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconBtn = {
      marginLeft: "5px",
    },
    iconBtnAvatar = {
      width: 28,
      height: 28,
    },
    dynamicList = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100vh",
      background: "radial-gradient(circle at center, #DC143C , #292929)",
    },
    dynamicListBox = {
      paddingTop: !matches && upDown ? "3rem" : 0,
    },
    dynamicListItem = {
      display: "block",
    },
    innerBox2 = {
      flexGrow: 1,
      p: paddingStyle(),
      marginTop: "1rem",
      paddingBottom: "10px",
      backgroundColor: Dark00(cookies),
      height: "97.5vh",
      overflowY: "scroll",
      scrollbarWidth: "none", // hide scrollbar on Firefox
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    listItemBtn = {
      minHeight: 48,
      justifyContent: open ? "initial" : "center",
      px: 2.5,
    },
    innerAvatar = {
      minWidth: 0,
      mr: open ? 3 : "auto",
      justifyContent: "center",
      width: 30,
      height: 30,
    },
    listItemText = {
      opacity: open ? 1 : 0,
      color: "#fff",
    },
    appBar = {
      background: "radial-gradient(circle at center, #DC143C , #292929)",
      boxShadow: "none",
    },
    toolbarIconBtn = {
      marginRight: 5,
      color: "crimson",
      ...(open && { display: "none" }),
    },
    toolbarIconBtnAvatar = {
      width: 30,
      height: 30,
    },
    innerBox3 = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleTypo = {
      color: "#fff",
    },
    childBox1 = {
      display: "flex",
      alignItems: "center",
    },
    searchIcon = {
      color: DarkFFF(cookies),
      fontSize: "20px",
    },
    searchToolbar = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: Dark00FF(cookies),
      padding: "1rem",
    };

  return {
    parentBox,
    drawerHeader1,
    innerBox1,
    iconBtn,
    iconBtnAvatar,
    dynamicList,
    dynamicListBox,
    dynamicListItem,
    innerBox2,
    listItemBtn,
    innerAvatar,
    listItemText,
    appBar,
    toolbarIconBtn,
    toolbarIconBtnAvatar,
    innerBox3,
    titleTypo,
    childBox1,
    searchIcon,
    searchToolbar,
  };
};
