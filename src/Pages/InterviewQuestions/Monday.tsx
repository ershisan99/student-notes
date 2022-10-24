import React from "react";
import { useQuery } from "@apollo/client";
import { MONDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";
import { filteredData } from "../../utils/searchFilter";
import { Spinner } from "../../components/spinner/Spinner";

const Monday: React.FC<{ search?: string }> = ({ search }) => {
  const { loading, error, data } = useQuery(MONDAY_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const newData = filteredData(data.mondays, "mondayItem", search);
  return (
    <MyGrid>
      {newData.map((e: { mondayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.mondayItem.raw} />
      ))}
    </MyGrid>
  );
};
export default Monday;
