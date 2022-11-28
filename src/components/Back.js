import React from "react";
import { Link } from "react-router-dom";

function Back() {
  return (
    <div>
      <Link to="/" style={{ color: "white" }}>
        <button style={{ cursor: "pointer" }}>back to home</button>
      </Link>
    </div>
  );
}

export default Back;
