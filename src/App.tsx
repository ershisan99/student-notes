import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Monday from "./Pages/InterviewQuestions/Monday";
import Tuesday from "./Pages/InterviewQuestions/Tuesday";
import StartPage from "./Pages/Start Page/StartPage";
import { CssBaseline } from "@mui/material";
import Wednesday from "./Pages/InterviewQuestions/Wednesday";
import Design from "./Pages/Design/Design";
import JSTS from "./Pages/JSTS/JSTS";
import ReactPage from "./Pages/ReactPage/ReactPage";
import Git from "./Pages/Git/Git";
import AdditionalInfo from "./Pages/AdditionalInfo/AdditionalInfo";

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <HashRouter>
        <Layout>
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
    </>
  );
}

export default App;
