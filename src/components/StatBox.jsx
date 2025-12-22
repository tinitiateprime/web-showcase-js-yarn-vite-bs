import React from "react";
import PropTypes from "prop-types";

const StatBox = ({ number, label }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: "1rem 2rem",
        borderRadius: "1rem",
        minWidth: "150px",
      }}
    >
      <h2 style={{ fontSize: "2rem", margin: "0", fontWeight: "bold" }}>{number}+</h2>
      <p style={{ margin: 0 }}>{label}</p>
    </div>
  );
};

StatBox.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatBox;
