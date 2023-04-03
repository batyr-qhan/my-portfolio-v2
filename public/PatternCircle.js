import * as React from "react";

const PatternCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={129}
    height={129}
    className={props.className}
    {...props}
  >
    <circle
      cx={830.5}
      cy={585.5}
      r={64}
      fill="none"
      stroke="#FFF"
      transform="translate(-766 -521)"
    />
  </svg>
);

export default PatternCircle;
