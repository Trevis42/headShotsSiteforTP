import React, { Component } from "react";

export default class LineItem5 extends Component {
  render() {
    return (
      <div className="lineItem">
        
        <p>
          5. Click show outline button to display the frame to assist with
          centering yourself in the photo. You can click again (Hide Outline) to
          hide it. It will not appear in your final photo either way.
        
          <br/>
          <img
            className="responsive"
            id="cam1"
            src="img/appscreenshot.png"
            alt="center yourself in the frame"
          ></img>
          </p>
      </div>
    );
  }
}
