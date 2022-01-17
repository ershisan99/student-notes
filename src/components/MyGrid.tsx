import React from "react";
import { Grid } from "@mui/material";

const MyGrid: React.FC = ({ children }) => {
  return (
    <Grid
      spacing={2}
      sx={{ maxWidth: 900, m: "0 auto" }}
      container
      alignItems={"center"}
      justifyContent={"center"}
    >
      {children}
    </Grid>
  );
};

export default MyGrid;
