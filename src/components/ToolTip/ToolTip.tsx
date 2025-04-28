/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./ToolTip.css";

const ToolTip = (props: { text: string; children: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {props.children}
      {isVisible && <div className="tooltip">{props.text} </div>}
    </div>
  );
};

export default ToolTip;
