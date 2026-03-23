import React, { useState, useRef } from 'react';

import './Founder.css';

import founderConversation from "../../assets/founderConversation.mp4";

const Founder = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='FounderDiv'>
      <div className="FounderVideoContaint">
        <div className="video-wrapper" onClick={handleVideoClick}>
          {!isPlaying && (
            <div className="video-thumbnail-overlay">
              <h2>“100% claim settlement is most important to us when it comes to building trust”</h2>
            </div>
          )}
          <video
            ref={videoRef}
            className="founder-video"
            playsInline
            src={founderConversation}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Founder;
