import React, { PropsWithChildren } from "react";
import { Grid } from "@mui/material";

const MyGrid: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid
      spacing={2}
      sx={{ maxWidth: 800 }}
      container
      alignItems={"center"}
      justifyContent={"center"}
    >
      {children}
    </Grid>
  );
};

export default MyGrid;
