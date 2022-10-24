import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Monday from "./Pages/InterviewQuestions/Monday";
import Tuesday from "./Pages/InterviewQuestions/Tuesday";
import StartPage from "./Pages/Start Page/StartPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Wednesday from "./Pages/InterviewQuestions/Wednesday";
import Design from "./Pages/Design/Design";
import JSTS from "./Pages/JSTS/JSTS";
import ReactPage from "./Pages/ReactPage/ReactPage";
import Git from "./Pages/Git/Git";
import AdditionalInfo from "./Pages/AdditionalInfo/AdditionalInfo";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", JSON.stringify(!isDarkTheme));
  };

  useEffect(() => {
    const isDarkTheme = JSON.parse(
      localStorage.getItem("isDarkTheme") || "true"
    );
    setIsDarkTheme(isDarkTheme);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <HashRouter>
        <Layout toggleDarkTheme={toggleDarkTheme}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/interviewQuestions/monday" element={<Monday />} />
            <Route path="/interviewQuestions/tuesday" element={<Tuesday />} />
            <Route
              path="/interviewQuestions/wednesday"
              element={<Wednesday />}
            />
            <Route path="/design" element={<Design />} />
            <Route path="/jsts" element={<JSTS />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/git" element={<Git />} />
            <Route path="/additionalinfo" element={<AdditionalInfo />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
