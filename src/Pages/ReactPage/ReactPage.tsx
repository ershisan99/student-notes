import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { REACT_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";

const ReactPage = () => {
  const { loading, error, data } = useQuery(REACT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.reactPageItems.map(
        (e: { reactPageItem: { raw: RichTextContent } }) => (
          <MyItem content={e.reactPageItem.raw} />
        )
      )}
    </Grid>
  );
};

export default ReactPage;
