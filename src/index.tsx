import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ImageProvider } from "../src/context/ImageContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ImageProvider>
      <App />
    </ImageProvider>
  </React.StrictMode>
);
