import React from "react";

const Audio = () => (
  <div className="container mt-4">
    <h2>🎵 Audio</h2>
    <audio controls className="w-100 mt-3">
      <source src="/sample.mp3" type="audio/mpeg" />
      Your browser does not support audio.
    </audio>
  </div>
);

export default Audio;
