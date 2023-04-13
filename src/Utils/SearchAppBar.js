import React, { memo } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./stylingMethods";
import { Light4F } from "./CommonCookies";

const SearchAppBar = ({ setQuery, query, matches, cookies }) => {
  const handleSearch = ({ currentTarget = [] }) => {
    setQuery(currentTarget.value);
  };
  return (
    <Box
      sx={{
         width: "100%",
      }}
    >
      <Search cookies={cookies} matches={matches}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: Light4F(cookies, matches) }} />
        </SearchIconWrapper>
        <StyledInputBase
          cookies={cookies}
          matches={matches}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          type="text"
          value={query}
          onChange={handleSearch}
        />
      </Search>
    </Box>
  );
};
export default memo(SearchAppBar);
