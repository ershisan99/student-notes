import React from "react";
import { LeftDrawer } from "./LeftDrawer";

const Layout: React.FC = ({ children }) => {
  let contents = [
    {
      text: "Старт",
      path: "student-notes/",
    },
    {
      text: "Понедельник",
      path: "student-notes/monday",
    },
    {
      text: "Вторник",
      path: "student-notes/tuesday",
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
