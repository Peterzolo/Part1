import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <div>
      {" "}
      <p>{total}</p>
    </div>
  );
};

export default Total;
