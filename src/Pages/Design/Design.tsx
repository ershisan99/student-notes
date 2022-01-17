import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { DESIGN_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const Design = () => {
  const { loading, error, data } = useQuery(DESIGN_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.designs.map((e: { designItem: { raw: RichTextContent } }) => (
        <MyItem content={e.designItem.raw} />
      ))}
    </MyGrid>
  );
};

export default Design;
