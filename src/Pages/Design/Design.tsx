import React from "react";
import { useQuery } from "@apollo/client";
import { DESIGN_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";
import { filteredData } from "../../utils/searchFilter";
import { Spinner } from "../../components/spinner/Spinner";

const Design: React.FC<{ search?: string }> = ({ search }) => {
  const { loading, error, data } = useQuery(DESIGN_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const newData = filteredData(data.designs, "designItem", search);
  return (
    <MyGrid>
      {newData.map((e: { designItem: { raw: RichTextContent } }) => (
        <MyItem content={e.designItem.raw} />
      ))}
    </MyGrid>
  );
};
export default Design;
