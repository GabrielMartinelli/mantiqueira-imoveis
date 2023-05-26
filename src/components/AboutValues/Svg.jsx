import React from "react";

export default function Svg({ path }) {
  return (
    <svg
      viewBox="0 0 1440 134"
      preserveAspectRatio="none"
      fill="#1e2e3c"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="80"
    >
      <path d={path}></path>
    </svg>
  );
}
