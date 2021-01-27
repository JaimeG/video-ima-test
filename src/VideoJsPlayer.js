import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "videojs-ima";
import "videojs-contrib-ads";

let imaOptions = {
  adTagUrl:
    "https://ad.doubleclick.net/ddm/pfadx/N1259107.274674JOYSTICKINTERACTI/B25154410.294442198;sz=0x0;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dcmt=text/xml;dc_sdk_apis=[APIFRAMEWORKS];dc_omid_p=[OMIDPARTNER];dc_vast=4;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};zid=12312;model_txt=giulia"
};

const VideoJsPlayer = (props) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!videoRef || player) return;

    const initPlayer = videojs(
      videoRef.current,
      props,
      function onPlayerReady() {
        console.log("onPlayerReady", this);

        this.ima(imaOptions);
      }
    );
    setPlayer(initPlayer);

    return () => {
      if (player) player.dispose();
    };
  }, [props, player]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js" />
      </div>
    </div>
  );
};

export default VideoJsPlayer;
