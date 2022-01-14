import React from "react";
import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import { RichTextContent } from "@graphcms/rich-text-types";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { INTRODUCTION_BLOCKS_QUERY } from "../../components/RenderPage";

const StartPage = () => {
  const { loading, error, data } = useQuery(INTRODUCTION_BLOCKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container alignItems={"center"} justifyContent={"center"}>
      <Grid item height={"100vh"} alignSelf="center" justifySelf={"center"}>
        <img src={data.coverImage.coverImage.url} alt="Cover" height={"85%"} />
      </Grid>
      {data.introductionBlocks.map(
        (e: { adviseText: { raw: RichTextContent } }) => (
          <Grid item xs={8}>
            <RichText
              content={e.adviseText.raw}
              renderers={{
                h1: ({ children }) => (
                  <Typography variant="h4" align="center" gutterBottom>
                    {children}
                  </Typography>
                ),
                p: ({ children }) => (
                  <Typography variant="body1"> {children}</Typography>
                ),
                bold: ({ children }) => (
                  <Typography variant="body1">
                    <b>{children}</b>
                  </Typography>
                ),
                li: ({ children }) => (
                  <Typography variant="body1">
                    <li>{children} </li>
                  </Typography>
                ),
                img: (props) => (
                  <img src={props.src} alt={props.altText} width={"100%"} />
                ),
              }}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default StartPage;
