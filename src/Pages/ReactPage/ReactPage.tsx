import React from "react";
import { useQuery } from "@apollo/client";
import { REACT_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const ReactPage = () => {
  const { loading, error, data } = useQuery(REACT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.reactPageItems.map(
        (e: { reactPageItem: { raw: RichTextContent } }) => (
          <MyItem content={e.reactPageItem.raw} />
        )
      )}
    </MyGrid>
  );
};

export default ReactPage;
