// @flow
import React from "react";

const Song = function() {
  return <audio loop={true} controls={false} autoPlay={true} src="/song.mp3" />;
};

export default Song;
