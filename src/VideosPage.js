import React, { useState, useEffect } from "react";
import VideoJsPlayer from "./VideoJsPlayer";

const VideosPage = () => {
  const [options, setOptions] = useState({
    width: 640,
    height: 360,
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4"
      }
    ]
  });

  return <VideoJsPlayer {...options} />;
};

export default VideosPage;
