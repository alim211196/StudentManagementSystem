import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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

  const buttonStyles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    borderRadius: "50%",
    background: "radial-gradient(circle at center, #1976D2 , #292929)",
    color: "white",
    width: "50px",
    height: "50px",
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transition: "all 0.3s ease",
  };

  return (
    <Fab sx={buttonStyles} onClick={scrollToTop}>
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default ScrollButton;
