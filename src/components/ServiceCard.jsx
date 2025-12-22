import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff0d",
        padding: "2rem",
        borderRadius: "1rem",
        width: "250px",
        backdropFilter: "blur(5px)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      className="service-card"
    >
      <Icon size={40} style={{ marginBottom: "1rem", color: "#06b6d4" }} />
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ServiceCard;
