// @flow
import React from "react";
import "./MusicVideo.css";
import Song from "./Song";
import Billboard from "./Billboard";
import Fireworks from "./Fireworks";

const MusicVideo = function({ count }) {
  return (
    <React.Fragment>
      <Fireworks />

      <div className="score-counter">{count} FUTURES</div>

      <div className="moon" />

      <div className="skyline">
        <div className="building1-shadow" />
        <div className="building1">
          <Billboard />
          <div className="building-left-half" />
          <div className="building-right-half" />
        </div>
      </div>
      <div className="road">
        <div className="road-top-half" />
        <div className="road-bottom-half" />
      </div>

      <div className="car-container">
        <div className="car-top1">
          <div className="window1" />
          <div className="window2" />
        </div>
        <div className="car-top2">
          <div className="door">
            <div className="door-knob" />
          </div>
        </div>
        <div className="car-bottom">
          <div className="wheel1-top" />
          <div className="wheel1">
            <div className="wheel-dot1" />
            <div className="wheel-dot2" />
            <div className="wheel-dot3" />
            <div className="wheel-dot4" />
          </div>

          <div className="wheel2-top" />
          <div className="wheel2">
            <div className="wheel-dot1" />
            <div className="wheel-dot2" />
            <div className="wheel-dot3" />
            <div className="wheel-dot4" />
          </div>
          <div className="car-aaron" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusicVideo;
