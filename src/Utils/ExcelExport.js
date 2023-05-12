import { Button } from "@mui/material";
import React, { memo } from "react";
import { utils, writeFile } from "xlsx";
import { useCookies } from "react-cookie";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const ExcelExport = ({ userData, data, fileName }) => {
  const [cookies] = useCookies(["theme"]);
  const UniqueData = data
    .filter(
      (i) =>
        i?.course === userData?.course &&
        i?.course_year === userData?.course_year
    )
    .map((obj) => ({ ...obj, profileImage: null }));

  const keysArray =
    UniqueData.length > 0 && UniqueData[0] ? Object.keys(UniqueData[0]) : [];

  const exportToExcel = () => {
    const headings = [keysArray];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, UniqueData, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <Button
      variant="outlined"
      startIcon={<FileDownloadIcon />}
      sx={{
        textTransform: "capitalize",
        color: cookies.theme === "dark" ? "#fff" : "#1976D2",
        background: cookies.theme === "dark" && "#1976D2",
      }}
      onClick={exportToExcel}
    >
      Export
    </Button>
  );
};

export default memo(ExcelExport);
