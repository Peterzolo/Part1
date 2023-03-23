import React from "react";

const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <div>
          <p>{part.name}</p>
          <p>{part.exercises}</p>
        </div>
      ))}
    </div>
  );
};

export default Part;
