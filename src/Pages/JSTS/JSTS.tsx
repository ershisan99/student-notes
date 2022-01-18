import React from "react";
import { useQuery } from "@apollo/client";
import { JSTS_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const JSTS = () => {
  const { loading, error, data } = useQuery(JSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.vanillaPageItems.map(
        (e: { vanillaPageItem: { raw: RichTextContent } }) => (
          <MyItem content={e.vanillaPageItem.raw} />
        )
      )}
    </MyGrid>
  );
};

export default JSTS;
