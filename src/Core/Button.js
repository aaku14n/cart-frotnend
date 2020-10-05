import React from "react";
import PropTypes from "prop-types";
import "./css/Button.css";
export function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button
      onClick={handleClick}
      className={"buttonBox"}
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: `1px solid ${
          props.borderColor ? props.borderColor : props.backgroundColor
        }`
      }}
    >
      {props.label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string
};
Button.defaultProps = {
  label: "Click",
  width: 200,
  height: 50,
  backgroundColor: "#2196f3"
};
