import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { NextUIProvider } from "@nextui-org/react";
import UserProvider from "./context/providers/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </NextUIProvider>
);
