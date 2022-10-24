import React from "react";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { RichTextContent } from "@graphcms/rich-text-types";
import { INTRODUCTION_BLOCKS_QUERY } from "../../components/RenderPage";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";
import { filteredData } from "../../utils/searchFilter";
import { Spinner } from "../../components/spinner/Spinner";

const StartPage: React.FC<{ search?: string }> = ({ search }) => {
  const { loading, error, data } = useQuery(INTRODUCTION_BLOCKS_QUERY);

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const newData = filteredData(data.introductionBlocks, "adviseText", search);
  return (
    <div>
      {!search && (
        <Box
          sx={{
            height: "calc(100vh - 64px)",
            width: "100%",
            textAlign: "center",
            my: 5,
          }}
        >
          <img
            src={data.coverImage.coverImage.url}
            height={"90%"}
            alt={"intro"}
          />
        </Box>
      )}
      <MyGrid>
        {newData.map((e: { adviseText: { raw: RichTextContent } }) => (
          <MyItem content={e.adviseText.raw} />
        ))}
      </MyGrid>
    </div>
  );
};
export default StartPage;
