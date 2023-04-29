import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import UserName from "./components/UserName";
import TestPage from "./components/TestPage";
import ResultsPage from "./components/ResultsPage";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#795548", // brown
    },
    background: {
      default: "#ffd7a8", // brighter brown
    },
    text: {
      primary: "#795548", // black
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  const [userName, setUserName] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<UserName setUserName={setUserName} />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<ResultsPage userName={userName} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
