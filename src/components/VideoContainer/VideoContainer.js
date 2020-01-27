import React, { Component } from "react";
import "./VideoContainer.css";
import myVideo from "../../assets/video/myVideo.mp4";

class VideoContainer extends Component {
  render() {
    return (
      <div className="video-container">
        <video src={myVideo} controls></video>
      </div>
    );
  }
}

export default VideoContainer;
