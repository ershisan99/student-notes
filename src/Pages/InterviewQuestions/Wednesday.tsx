import React from "react";
import { useQuery } from "@apollo/client";
import { WEDNESDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const Wednesday = () => {
  const { loading, error, data } = useQuery(WEDNESDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <MyGrid>
      {data.wednesdays.map((e: { wednesdayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.wednesdayItem.raw} />
      ))}
    </MyGrid>
  );
};

export default Wednesday;
