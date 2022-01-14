import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { MONDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";

const Monday = () => {
  const { loading, error, data } = useQuery(MONDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.mondays.map((e: { mondayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.mondayItem.raw} />
      ))}
    </Grid>
  );
};

export default Monday;
