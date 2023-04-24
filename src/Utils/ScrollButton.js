import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const useStyles = makeStyles({
  scrollToTopButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    borderRadius: "50%",
    background: "radial-gradient(circle at center, #1976D2 , #292929)",
    color: "white",
    width: "50px",
    height: "50px",
    "&:hover": {
      background: "radial-gradient(circle at center, #1976D2 , #292929)",
    },
  },
  hidden: {
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
  },
  visible: {
    opacity: 1,
    visibility: "visible",
    transition: "all 0.3s ease",
  },
});

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const classes = useStyles();

  return (
    <Fab
      className={`${classes.scrollToTopButton} ${
        isVisible ? classes.visible : classes.hidden
      }`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default ScrollButton;
