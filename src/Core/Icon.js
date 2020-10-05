import React from "react";
import PropTypes from "prop-types";
import { ASSETS_BASE_PATH } from "../lib/Constant";
import "./css/Icon.css";
export function Icon({ image, size, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="iconBase" onClick={handleClick}>
      <div
        className="iconImage"
        style={{
          backgroundImage: `url("${ASSETS_BASE_PATH}${image}")`,
          width: size,
          height: size
        }}
      />
    </div>
  );
}
Icon.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func
};
Icon.defaultProps = {
  size: 20
};
