import React from "react";
import "./Billboard.css";
import range from "lodash/range";
import sample from "lodash/sample";

class Billboard extends React.Component {
  state = {
    currentImage: 1
  };

  componentDidMount() {
    this.handleSelectNewImage();
  }

  handleSelectNewImage() {
    this.setState(
      {
        currentImage: sample(range(1, 7))
      },
      () => {
        setTimeout(() => {
          this.handleSelectNewImage();
        }, 10 * 1000);
      }
    );
  }

  render() {
    return (
      <div className="building-billboard">
        <div
          className="building-billboard-viewer"
          style={{ backgroundImage: `url(/images/${this.state.currentImage}.gif)` }}
        />
      </div>
    );
  }
}

export default Billboard;
