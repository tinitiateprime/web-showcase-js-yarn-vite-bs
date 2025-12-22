import React from "react";
import favicon from "../assets/favicon_new.png"; // adjust path if needed

const AnimationPage = () => {
  return (
    <div 
      style={{
        position: "relative",
        width: "100%",
        height: "200vh", 
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgb(35, 174, 192), rgb(207, 125, 188))",
      }}
    >
      <img
        src={favicon}
        alt="Flowing Symbol"
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "auto",
          animation: "flowDown 5s linear infinite",
        }}
      />

      {/* Inline CSS animation */}
      <style>
        {`
          @keyframes flowDown {
            0% { top: -120px; }
            100% { top: 200vh; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimationPage;
