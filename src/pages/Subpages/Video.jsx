import React from "react";

const Video = () => (
  <div className="container mt-4">
    <h2>🎬 Video</h2>
    <video controls className="w-100 mt-3">
      <source src="/sample.mp4" type="video/mp4" />
      Your browser does not support video.
    </video>
  </div>
);

export default Video;
