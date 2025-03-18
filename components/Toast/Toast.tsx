import React from "react";

interface ToastProps {
  type: string;
  text: string;
}

function Toast({
  type,
  text
}: ToastProps) {
  return (
    <div className={`toast ${type === "success" ? "success" : "warning"}`}>
      {text}
    </div>
  );
}

export default Toast;
