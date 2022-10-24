import React from "react";
import { useQuery } from "@apollo/client";
import { TUESDAY_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";
import { filteredData } from "../../utils/searchFilter";
import { Spinner } from "../../components/spinner/Spinner";

const Tuesday: React.FC<{ search?: string }> = ({ search }) => {
  const { loading, error, data } = useQuery(TUESDAY_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const newData = filteredData(data.tuesdays, "tuesdayItem", search);
  return (
    <MyGrid>
      {newData.map((e: { tuesdayItem: { raw: RichTextContent } }) => (
        <MyItem content={e.tuesdayItem.raw} />
      ))}
    </MyGrid>
  );
};
export default Tuesday;
