import "./App.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/theme.js";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Layout />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
