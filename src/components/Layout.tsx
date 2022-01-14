import React from "react";
import { LeftDrawer } from "./LeftDrawer";

const Layout: React.FC = ({ children }) => {
  let contents = [
    {
      text: "Старт",
      path: "/",
    },
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
    {
      text: "Вёрстка",
      path: "/design",
    },
    {
      text: "JS/TS",
      path: "/jsts",
    },

    {
      text: "React",
      path: "/react",
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
