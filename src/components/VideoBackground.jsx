const VideoBackground = () => (
  <>
    <video autoPlay loop muted style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}>
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
    </video>
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 1,
    }} />
  </>
);

export default VideoBackground;
