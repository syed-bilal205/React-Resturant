import React from "react";
import Meal from "../../assets/images/meal.mp4";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactPlayer
          url={Meal}
          loop
          controls
          muted
          className="video-player"
          style={{ minWidth: "100vw", minHeight: "600px" }}
        />
      </div>
    </>
  );
};

export default Video;
