// @flow
import React, { Component } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import MusicVideo from "./components/MusicVideo";
import Song from "./components/Song";

type Props = {};
type State = {
  playState: string,
  count: number
};

class App extends Component<Props, State> {
  state = {
    playState: "main",
    count: 0
  };

  handleStart = () => {
    this.setState({
      playState: "intro"
    });

    setTimeout(() => {
      this.setState({
        playState: "play"
      });
      this.incrementCount();
    }, 14.3 * 1000);
  };

  incrementCount() {
    setTimeout(() => {
      this.setState(
        {
          count: this.state.count + 1
        },
        () => this.incrementCount()
      );
    }, 6000);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.playState !== "main" && <Song />}
        {this.state.playState === "play" ? (
          <MusicVideo count={this.state.count} />
        ) : (
          <MainMenu onStart={this.handleStart} playState={this.state.playState} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
