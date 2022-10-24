import React from "react";
import { useQuery } from "@apollo/client";
import { WEDNESDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";
import { filteredData } from "../../utils/searchFilter";
import { Spinner } from "../../components/spinner/Spinner";

const Wednesday: React.FC<{ search?: string }> = ({ search }) => {
  const { loading, error, data } = useQuery(WEDNESDAY_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const newData = filteredData(data.wednesdays, "wednesdayItem", search);
  return (
    <MyGrid>
      {newData.map((e: { wednesdayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.wednesdayItem.raw} />
      ))}
    </MyGrid>
  );
};

export default Wednesday;
