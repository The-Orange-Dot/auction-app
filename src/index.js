import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// This stops scrolling
document.body.style.overflowY = "hidden";

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
