import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { DESIGN_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";

const Design = () => {
  const { loading, error, data } = useQuery(DESIGN_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.designs.map((e: { designItem: { raw: RichTextContent } }) => (
        <MyItem content={e.designItem.raw} />
      ))}
    </Grid>
  );
};

export default Design;
