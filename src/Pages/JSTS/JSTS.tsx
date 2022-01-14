import React from "react";
import { useQuery } from "@apollo/client";
import { JSTS_QUERY } from "../../components/RenderPage";
import { Grid } from "@mui/material";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";

const JSTS = () => {
  const { loading, error, data } = useQuery(JSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.vanillaPageItems.map(
        (e: { vanillaPageItem: { raw: RichTextContent } }) => (
          <MyItem content={e.vanillaPageItem.raw} />
        )
      )}
    </Grid>
  );
};

export default JSTS;
