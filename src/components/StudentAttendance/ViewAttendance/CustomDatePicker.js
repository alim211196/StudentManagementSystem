import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { memo } from "react";
import CustomTheme from "../../../Utils/CustomTheme";
import { Dark00FF } from "../../../Utils/CommonCookies";
import ExcelExport from "../../../Utils/ExcelExport";
import DeleteIcon from "@mui/icons-material/Delete";
const CustomDatePicker = ({
  userData,
  ExportData,
  cookies,
  setStartDate,
  startDate,
  AttData,
  handleOpen,
  deleteFlag,
}) => {
  return (
    <CustomTheme>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: Dark00FF(cookies),
          p: 0.8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: cookies.theme === "dark" ? "#fff" : "#1976D2",
              fontSize: "20px",
              ml: 1,
            }}
          >
            Select Date:
          </Typography>
          <TextField
            sx={{ ml: 1 }}
            required
            id="date"
            type="date"
            size="small"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            variant="outlined"
            inputProps={{
              max: "2999-12-31",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        {ExportData && ExportData.length > 0 && (
          <Box>
            {deleteFlag && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                sx={{
                  textTransform: "capitalize",
                  color: cookies.theme === "dark" ? "#fff" : "#d32f2f",
                  background: cookies.theme === "dark" && "#d32f2f",
                  mr: 1,
                }}
                onClick={() => handleOpen()}
              >
                Delete Attendance
              </Button>
            )}
            <ExcelExport
              userData={userData}
              data={ExportData}
              fileName={"attendance"}
            />
          </Box>
        )}
      </Paper>
    </CustomTheme>
  );
};

export default memo(CustomDatePicker);
