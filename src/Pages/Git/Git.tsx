import React from "react";
import { useQuery } from "@apollo/client";
import { GIT_QUERY } from "../../components/RenderPage";
import { RichTextContent } from "@graphcms/rich-text-types";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";
import { filteredData } from "../../utils/searchFilter";
import { Spinner } from "../../components/spinner/Spinner";

const Git: React.FC<{ search?: string }> = ({ search }) => {
  const { loading, error, data } = useQuery(GIT_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const newData = filteredData(data.gitItems, "gitItem", search);
  return (
    <MyGrid>
      {newData.map((e: { gitItem: { raw: RichTextContent } }) => (
        <MyItem content={e.gitItem.raw} />
      ))}
    </MyGrid>
  );
};
export default Git;
