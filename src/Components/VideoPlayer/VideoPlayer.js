import React, { useState, useEffect } from "react";
import "./VideoPlayer.scss";

function VideoPlayer() {
  const videoElement = document.getElementById("video");

  async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (error) {
      //   Catch Errors
      console.log(error);
    }
  }

  const clickHandler = async (e) => {
    e.target.disabled = true;
    await videoElement.requestPictureInPicture();
    e.target.disabled = false;
    // this.forceUpdate();
  };

  selectMediaStream();
  return (
    <div className='container'>
      <h1 className='header'>Magic Picture in Picture Button</h1>
      <video
        id='video'
        controls
        height='360'
        width='640'
        className='video'
        controls></video>

      <button id='button' className='button' onClick={(e) => clickHandler(e)}>
        START
      </button>
      <p className='instructions'>
        Step 1: On Load, you will be prompted to select the window, screen or
        tab that you want to use.
      </p>
      <p className='instructions'>
        Step 2: Once your selected view is playing in the player above, click
        the start button to initiate Picture in Picture mode.
      </p>
    </div>
  );
}

export default VideoPlayer;
