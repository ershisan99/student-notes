import React from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Monday from "./Pages/Monday/Monday";
import Tuesday from "./Pages/Tuesday/Tuesday";
import StartPage from "./Pages/Start Page/StartPage";
import { CssBaseline } from "@mui/material";

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
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
