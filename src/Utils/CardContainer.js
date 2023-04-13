import { Box, Grid } from '@mui/material';
import React,{memo} from 'react'
import CustomCard from './CustomCard';
import DataNotFound from './DataNotFound';


const CardContainer = ({
  parentComp,
  handleEdit,
  handleOpen,
  data,
}) => {


  const styleOnGrid = {
    display: "flex",
    height: "70vh",
    justifyContent: "center",
    alignItems: "center",
  };
  const ConditionOnGrid = () => {
    if (data.length < 1) {
      return styleOnGrid;
    }
  };
  return (
    <Box>
      <Grid container spacing={2} sx={ConditionOnGrid}>
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
                <CustomCard
                  parentComp={parentComp}
                  handleEdit={handleEdit}
                  item={item}
                  handleOpen={handleOpen}
                />
              </Grid>
            );
          })
        ) : (
          <DataNotFound />
        )}
      </Grid>
    </Box>
  );
};

export default memo(CardContainer);