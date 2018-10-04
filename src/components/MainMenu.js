// @flow
import React from "react";
import "./MainMenu.css";

type Props = {
  onStart: () => void,
  playState: string
};

const MainMenu = function({ onStart, playState }: Props) {
  return (
    <React.Fragment>
      <div className={"center-container " + (playState === "intro" ? "center-container-zoomed" : "")} onClick={onStart}>
        <svg id="triangle-1" className="triangle center-contents" height="300" width="350">
          <polygon points="0,300 175,0 350,300" />
        </svg>
        <svg id="triangle-2" className="triangle center-contents" height="300" width="350">
          <polygon points="0,300 175,0 350,300" />
        </svg>
        <svg id="triangle-3" className="triangle center-contents" height="300" width="350">
          <polygon points="0,300 175,0 350,300" />
        </svg>
        <h1 id="spin-text" className="center-contents">
          Aaron Futures
        </h1>
      </div>
      <div className="MainMenu-play-message" />
    </React.Fragment>
  );
};

export default MainMenu;
