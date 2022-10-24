import React, { useState } from "react";
import { SearchResultsPage } from "../Pages/SearchResultsPage/SearchResultsPage";
import { LeftDrawer } from "./LeftDrawer";

type Props = {
  children: React.ReactNode;
  toggleDarkTheme: () => void;
};

const Layout: React.FC<Props> = ({ children, toggleDarkTheme }) => {
  const [search, setSearch] = useState("");
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
      <LeftDrawer
        contents={contents}
        searchValue={search}
        changeSearchValue={setSearch}
        toggleDarkTheme={toggleDarkTheme}
      >
        {search ? <SearchResultsPage search={search} /> : children}
      </LeftDrawer>
    </div>
  );
};

export default Layout;
