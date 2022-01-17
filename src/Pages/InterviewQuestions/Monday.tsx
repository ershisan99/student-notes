import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { MONDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const Monday = () => {
  const { loading, error, data } = useQuery(MONDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.mondays.map((e: { mondayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.mondayItem.raw} />
      ))}
    </MyGrid>
  );
};

export default Monday;
