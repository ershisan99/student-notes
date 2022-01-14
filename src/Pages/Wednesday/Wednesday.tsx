import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { WEDNESDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";

const Wednesday = () => {
  const { loading, error, data } = useQuery(WEDNESDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.wednesdays.map((e: { wednesdayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.wednesdayItem.raw} />
      ))}
    </Grid>
  );
};

export default Wednesday;
