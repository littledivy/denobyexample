import React from "https://esm.sh/react";
import exampleData from "./data.ts";
import { Link } from "https://esm.sh/react-router-dom";

export default () => {
  return Object.keys(exampleData).map((route) =>
    <a className="card">
      <Link to={route} style={{ color: 'inherit', textDecoration: "none" }}>
        <h3># {exampleData[route].title}</h3>
      </Link>
    </a>
  );
};
