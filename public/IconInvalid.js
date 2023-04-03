import * as React from "react";

const IconInvalid = (props) => (
  <svg
    className={props.className}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={11.5} stroke="#FF6F5B" />
    <rect x={11} y={6} width={2} height={9} rx={1} fill="#FF6F5B" />
    <rect x={11} y={17} width={2} height={2} rx={1} fill="#FF6F5B" />
  </svg>
);

export default IconInvalid;
