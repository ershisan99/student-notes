import { Grid, Paper } from "@mui/material";
import MyRichText from "./MyRichText";
import React from "react";
import { RichTextContent } from "@graphcms/rich-text-types";

type MyItemPropTypes = {
  content: RichTextContent;
};

export const MyItem = (props: MyItemPropTypes) => (
  <Grid item xs={12}>
    <Paper sx={{ p: 3 }}>
      <MyRichText content={props.content} />
    </Paper>
  </Grid>
);
