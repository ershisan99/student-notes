import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Grid, Paper, Typography } from "@mui/material";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { TUESDAY_QUERY } from "./index";
import { RichTextContent } from "@graphcms/rich-text-types";

const Tuesday = () => {
  const { loading, error, data } = useQuery(TUESDAY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {data.mondays.map((e: { mondayItem: { raw: RichTextContent } }) => (
        <Grid item xs={8}>
          <Card sx={{ p: 3 }}>
            <RichText
              content={e.mondayItem.raw}
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
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tuesday;
