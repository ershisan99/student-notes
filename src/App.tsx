import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Monday from "./Pages/Monday/Monday";
import Tuesday from "./Pages/Tuesday/Tuesday";
import StartPage from "./Pages/Start Page/StartPage";
import { CssBaseline } from "@mui/material";
import Wednesday from "./Pages/Wednesday/Wednesday";
import Design from "./Pages/Design/Design";
import JSTS from "./Pages/JSTS/JSTS";
import ReactPage from "./Pages/ReactPage/ReactPage";

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/monday" element={<Monday />} />
            <Route path="/tuesday" element={<Tuesday />} />
            <Route path="/wednesday" element={<Wednesday />} />
            <Route path="/design" element={<Design />} />
            <Route path="/jsts" element={<JSTS />} />
            <Route path="/react" element={<ReactPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
