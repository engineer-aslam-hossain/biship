import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../i18n";
import FadeLoader from "react-spinners/FadeLoader ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
          }}
        >
          .
          <FadeLoader color={"#2053d1"} loading={true} size={150} />
        </div>
      }
    >
      <App />
    </React.Suspense>
  </React.StrictMode>
);
