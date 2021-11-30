import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "reset.css";
import theme from "./ui/theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
