import React from "react";
import './Char.css';
import CharBar from "./CharBar";

const Char = ({ dataPoints }) => {

  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return <div className="chart">
    {
      dataPoints.map(dataPoint => (
        <CharBar
          key={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))
    }
  </div>
}

export default Char;