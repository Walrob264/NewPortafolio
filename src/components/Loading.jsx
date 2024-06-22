import React, { useEffect, useRef } from "react";

function Loading() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        muted
        loop
      >
        <source src="Loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Loading;
