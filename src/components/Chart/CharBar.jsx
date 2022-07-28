import React from "react";
import './CharBar.css';

const CharBar = ({ maxValue, value, label }) => {

  let Fill = "0%";
  if (value > 0) {
    Fill = (Math.round((value / maxValue) * 100)) + '%';
    console.log(Fill)
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height : Fill }} > </div>
      </div>
      <div className="chart-bart__label">
        <label>{label}</label>
      </div>
    </div>
  )

}

export default CharBar;