import React from "react";
import PropTypes from "prop-types";

function Toast({ type, text }: { type: string; text: string }) {
  return (
    <div className={`toast ${type === "success" ? "success" : "warning"}`}>
      {text}
    </div>
  );
}

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Toast;
