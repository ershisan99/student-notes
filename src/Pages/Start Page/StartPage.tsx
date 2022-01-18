import React from "react";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { RichTextContent } from "@graphcms/rich-text-types";
import { INTRODUCTION_BLOCKS_QUERY } from "../../components/RenderPage";
import { MyItem } from "../../components/MyItem";
import MyGrid from "../../components/MyGrid";

const StartPage = () => {
  const { loading, error, data } = useQuery(INTRODUCTION_BLOCKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          width: "100%",
          textAlign: "center",
          my: 5,
        }}
      >
        <img src={data.coverImage.coverImage.url} height={"90%"} />
      </Box>
      <MyGrid>
        {data.introductionBlocks.map(
          (e: { adviseText: { raw: RichTextContent } }) => (
            <MyItem content={e.adviseText.raw} />
          )
        )}
      </MyGrid>
    </>
  );
};

export default StartPage;
