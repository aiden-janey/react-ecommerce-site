import React from "react";
import { createRoot } from "react-dom/client";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
