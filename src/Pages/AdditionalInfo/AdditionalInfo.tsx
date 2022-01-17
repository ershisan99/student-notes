import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { INFO_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const AdditionalInfo = () => {
  const { loading, error, data } = useQuery(INFO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.additionalInfoItems.map(
        (e: { additionalInfoItem: { raw: RichTextContent } }) => (
          <MyItem content={e.additionalInfoItem.raw} />
        )
      )}
    </MyGrid>
  );
};

export default AdditionalInfo;
