import { Dark00 } from "../../Utils/CommonCookies";

export const HomeStyle = (cookies) => {
  let Container = { margin: "85px 20px 0px 20px" },
    MainContainer = {
      borderRadius: "10px",
      boxShadow: "0px 0px 6px 3px #292929",
      transition: "0.3s",
      "&:hover": {
        boxShadow: "0px 0px 6px 3px #292929",
      },
      position: "relative",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      background: `url(https://source.unsplash.com/random/?city,evening)`,
    },
    innerBox = {
      textAlign: "left",
      padding: "2rem",
      background: "rgba(41, 41, 41, 0.5)",
      borderRadius: "10px",
    },
    typo1 = {
      margin: 0,
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
      marginBottom: "0.35em",
      color: "#fff",
    },
    typo2 = {
      margin: 0,
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: 1.334,
      letterSpacing: "0em",
      marginBottom: "16px",
      color: "#fff",
    },
    parentContainer = {
      backgroundColor: Dark00(cookies),
      // height: "100vh",
      width: "100%",
      overflow: "scroll",
      overflowY: "auto",
      margin: 0,
      padding: 0,
      listStyle: "none",

      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#DC143C",
        outline: "1px solid slategrey",
      },

      "& .MuiContainer-root": {
        paddingLeft: 0,
        paddingRight: 0,
      },
    };

  const longText = `This website is designed to provide an easy and efficient way for
              students, teachers, and administrators to manage student
              information, including course schedules, grades, attendance
              records, and more. With a user-friendly interface and powerful
              tools, this system is designed to simplify and streamline the
              process of managing student data, allowing you to focus on what
              really matters: providing the best possible education for your
              students. Whether you are a teacher, administrator, or student,
              this website has everything you need to stay organized and on
              track.`;

  return {
    Container,
    MainContainer,
    innerBox,
    typo1,
    typo2,
    parentContainer,
    longText,
  };
};
