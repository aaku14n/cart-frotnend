import React from "react";
import PropTypes from "prop-types";
import "./css/Input.css";
export function Input(props) {
  const handleChange = e => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  return (
    <input
      type={props.type}
      value={props.value}
      className={"inputBox"}
      onChange={handleChange}
      placeholder={props.placeholder}
      maxLength={40}
    />
  );
}
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};
Input.defaultProps = {
  type: "text",
  placeholder: "Type"
};
