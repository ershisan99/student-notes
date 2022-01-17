import React from "react";
import { LeftDrawer } from "./LeftDrawer";

const Layout: React.FC = ({ children }) => {
  let contents = [
    {
      text: "Старт",
      path: "/",
      isFolder: false,
    },
    {
      text: "Подготовка к собесам",
      path: "/interviewQuestions",
      isFolder: true,
      contents: [
        {
          text: "Понедельник",
          path: "/monday",
        },
        {
          text: "Вторник",
          path: "/tuesday",
        },
        {
          text: "Среда",
          path: "/wednesday",
        },
      ],
    },
    {
      text: "Вёрстка",
      path: "/design",
      isFolder: false,
    },
    {
      text: "JS/TS",
      path: "/jsts",
      isFolder: false,
    },
    {
      text: "React",
      path: "/react",
      isFolder: false,
    },
    {
      text: "Git",
      path: "/git",
      isFolder: false,
    },
    {
      text: "Дополнительно",
      path: "/additionalinfo",
      isFolder: false,
    },
  ];
  return (
    <div>
      <LeftDrawer contents={contents} />
      {children}
    </div>
  );
};

export default Layout;
