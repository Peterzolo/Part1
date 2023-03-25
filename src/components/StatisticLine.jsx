import React from "react";

const StatisticLine = ({ text, good }) => {
  return (
    <div>
      <div>{text}</div>
      <div>{good}</div>
    </div>
  );
};

export default StatisticLine;
