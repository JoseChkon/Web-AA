import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { NextUIProvider } from "@nextui-org/react";
import userProvider from "./context/providers/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <userProvider>
      <App />
    </userProvider>
  </NextUIProvider>
);
