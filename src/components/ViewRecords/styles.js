import { createTheme } from "@mui/material/styles";

export default {
  tableRowText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontSize: "14px",
    textTransform: "capitalize",
    justifyContent: "left",
    display: "flex",
  },
  useTableTheme: () =>
    createTheme({
      components: {
        MuiTableRow: {
          styleOverrides: {
            head: {
              backgroundColor: "#4f4f4f",
              color: "#fff",
              textTransform: "capitalize",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              color: "inherit !important",
            },
          },
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              color: "inherit !important",
            },
          },
        },
        MUIDataTableSelectCell: {
          styleOverrides: {
            fixedLeft: {
              color: "#c7c7c7 !important",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            head: {
              backgroundColor: "inherit !important",
              color: "inherit !important",
              height: "10%",
              borderBottom: "none !important",
            },
            root: {
              padding: 5,
              textAlign: "center",
            },
          },
        },
        MuiTable: {
          styleOverrides: {
            root: {
              "& .Mui-selected": {
                backgroundColor: "transparent !important",
              },
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            sortActive: {
              color: "inherit !important",
              paddingRight: 0,
            },
            sortAction: {
              "& svg": {
                color: "#fff !important", // or whatever you need
              },
            },
          },
        },
      },
    }),
};
