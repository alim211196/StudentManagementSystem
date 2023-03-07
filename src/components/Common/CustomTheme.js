import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const CustomTheme = (props) => {
  const theme = createTheme({
    overrides: {
    MUIDataTable: {
      paper: {
        boxShadow: 'none',
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontWeight: 'bold',
      },
    },
    MUIDataTableBodyCell: {
      root: {
        padding: '10px',
      },
    },
  },
    palette: {
      primary: {
        main: "#4f4f4f",
      },
    },

    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                color: "#4f4f4f",
                borderColor: "#4f4f4f", // change border color
              },
            },
            "& .MuiInputLabel-root": {
              color: "#4f4f4f",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            border: "1px solid #696969!important",
            "&:hover": {
              border: "1px solid #696969!important",
            },
          },
        },
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#00AEEF",
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
