import React from "react";
import "./History.css";


const History = () => {
  return (
    <div id="history" className="history-container">
      {/* Left Section */}
      <div className="history-left">
        <h3 className="history-heading-small">Our History</h3>
        <h1 className="history-heading-large">Connecting Adventurers to Majestic Peaks</h1>
      </div>

      {/* Right Section */}
      <div className="history-right">
        <div className="history-card">
          <h4 className="history-card-title">Origins of Mountaineering</h4>
          <p className="history-card-text">
            From the 18th-century explorers to today, mountaineering blends adventure and nature.
          </p>
        </div>
        <div className="history-card">
          <h4 className="history-card-title">Pioneers of Adventure</h4>
          <p className="history-card-text">
          Trailblazers like Edward Whymper inspired generations of climbers worldwide.</p>
        </div>
        <div className="history-card">
          <h4 className="history-card-title">A Timeless Passion</h4>
          <p className="history-card-text">
          Beyond challenge, mountaineering offers a deep connection with nature. </p>
        </div>
        <div className="history-card">
          <h4 className="history-card-title">Our Mission</h4>
          <p className="history-card-text">
            Helping adventurers explore peaks safely and seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
