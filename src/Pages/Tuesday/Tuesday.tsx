import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { TUESDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";

const Tuesday = () => {
  const { loading, error, data } = useQuery(TUESDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.tuesdays.map((e: { tuesdayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.tuesdayItem.raw} />
      ))}
    </Grid>
  );
};

export default Tuesday;
