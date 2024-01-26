import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-2.png" />
          <div className="FORMULA-NANO">
            FORMULA NANO
            <br />
            University of Waterloo
          </div>
          <div className="text-wrapper">About</div>
          <div className="text-wrapper-2">Team</div>
          <div className="text-wrapper-3">Contact Us</div>
          <div className="rectangle-2" />
        </div>
        <div className="ellipse" />
        <div className="overlap-group">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">About</div>
          <p className="p">We’re a design team making a nanocar. How cool is that!</p>
        </div>
        <div className="overlap-2">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Team</div>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="name-position">
            Ryan Miller
            <br />
            Computation Lead
          </div>
          <div className="name-position-2">
            Name
            <br />
            Position
          </div>
          <div className="name-position-3">
            Name
            <br />
            Position
          </div>
          <div className="name-position-4">
            Name
            <br />
            Position
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Contact Us</div>
          <div className="text-wrapper-5">Here’s our links:</div>
        </div>
      </div>
    </div>
  );
};
