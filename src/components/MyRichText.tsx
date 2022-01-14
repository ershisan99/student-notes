import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/show-language/prism-show-language";

type MyRichTextPropTypes = {
  content: RichTextContent;
};

const MyRichText = (props: MyRichTextPropTypes) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <RichText
      content={props.content}
      renderers={{
        h1: ({ children }) => (
          <Typography variant="h3" align="center" gutterBottom mt={3} mb={3}>
            {children}
          </Typography>
        ),
        h2: ({ children }) => <Typography variant="h4">{children}</Typography>,
        p: ({ children }) => (
          <Typography variant="body1" mt={2} mb={2}>
            {children}
          </Typography>
        ),
        bold: ({ children }) => <b>{children}</b>,
        li: ({ children }) => (
          <Typography variant="body1">
            <li>{children} </li>
          </Typography>
        ),
        img: (props) => (
          <img src={props.src} alt={props.altText} width={"100%"} />
        ),

        code_block: ({ children }) => (
          <pre className="language-tsx">
            <code>{children}</code>
          </pre>
        ),
        code: ({ children }) => (
          <pre className="language-tsx">
            <code>{children}</code>
          </pre>
        ),
      }}
    />
  );
};

export default MyRichText;
