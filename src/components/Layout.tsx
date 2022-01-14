import React from "react";
import { LeftDrawer } from "./LeftDrawer";

const Layout: React.FC = ({ children }) => {
  let contents = [
    {
      text: "Старт",
      path: process.env.PUBLIC_URL + "/",
    },
    {
      text: "Понедельник",
      path: process.env.PUBLIC_URL + "/monday",
    },
    {
      text: "Вторник",
      path: process.env.PUBLIC_URL + "/tuesday",
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
