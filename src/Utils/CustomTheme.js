import React, { memo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCookies } from "react-cookie";
import {
  Dark4F,
  DarkFFF,
  DarkFF4F,
  Dark00,
  DarkBorder,
  DarkD4D4,
  DarkThin4f4f,
} from "./CommonCookies";
import { useMediaQuery } from "@mui/material";
const CustomTheme = ({ children }) => {
  const [cookies] = useCookies(["theme"]);
  const matches = useMediaQuery("(min-width:600px)");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#292929",
      },
      secondary: {
        main: "#DC143C",
      },
    },
    components: {
      typography: {
        fontFamily: "Roboto",
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                color: Dark4F(cookies),
                borderColor: Dark4F(cookies), // change border color
              },
            },
            "& .MuiOutlinedInput-root.Mui-disabled": {
              "& fieldset": {
                color: Dark4F(cookies),
                borderColor: Dark4F(cookies), // change border color
              },
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: Dark4F(cookies),
            },
            "& .MuiOutlinedInput-root.Mui-disabled:hover fieldset": {
              borderColor: DarkFFF(cookies),
            },
            "& .MuiOutlinedInput-input": {
              color: DarkFF4F(cookies),
            },
            "& .MuiOutlinedInput-input.Mui-disabled": {
              WebkitTextFillColor: DarkFFF(cookies),
              opacity: 0.6,
            },
            "& .MuiInputLabel-root": {
              color: DarkFF4F(cookies),
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: DarkFF4F(cookies),
            },
            "& .MuiInputLabel-root.Mui-disabled": {
              color: DarkFFF(cookies),
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                color: Dark4F(cookies),
                borderColor: Dark4F(cookies), // change border color
              },
            },
            "& .MuiOutlinedInput-root:hover fieldset": {
              borderColor: Dark4F(cookies),
            },
            "& .MuiOutlinedInput-input": {
              color: DarkFF4F(cookies),
            },
            "& .MuiInputLabel-root": {
              color: DarkFF4F(cookies),
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: DarkFF4F(cookies),
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            // border: "1px solid #696969!important",
            "&:hover": {
              // border: "1px solid #696969!important",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            "&.MuiPopover-paper": {
              backgroundColor: Dark00(cookies),
              color: DarkFFF(cookies),
              border: DarkBorder(cookies),
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&.MuiIconButton-root.Mui-disabled": {
              color: DarkD4D4(cookies),
              opacity: 0.6,
            },
            "&.MuiIconButton-root": {
              color: DarkD4D4(cookies),
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            "&.MuiDivider-root::before": {
              borderTop: DarkThin4f4f(cookies),
            },
            "&.MuiDivider-root::after": {
              borderTop: DarkThin4f4f(cookies),
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            background: Dark4F(cookies),
            "& .MuiChip-label": {
              color: DarkFFF(cookies),
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: !matches && "48px !important",
            height: !matches && "27px !important",
            padding: !matches && "6px !important",
            marginLeft: !matches && "5px !important",
            "& .MuiSwitch-thumb": {
              width: !matches && "24px !important",
              height: !matches && "24px !important",
            },
            "& .MuiSwitch-switchBase": {
              margin: !matches && "1px 0px !important",
            },
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            color: "#DC143C",
            backgroundColor: "#fff",
            border: "1px solid #DC143C",
            fontWeight: "bolder",
          },
        },
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#3f3f3f",
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default memo(CustomTheme);
