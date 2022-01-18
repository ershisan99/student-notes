import React from "react";
import { useQuery } from "@apollo/client";
import { TUESDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const Tuesday = () => {
  const { loading, error, data } = useQuery(TUESDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.tuesdays.map((e: { tuesdayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.tuesdayItem.raw} />
      ))}
    </MyGrid>
  );
};

export default Tuesday;
