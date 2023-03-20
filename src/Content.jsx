import React from "react";
import Part from "./Part";

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) => {
  return (
    <div>
      <Part part1={part1} exercises1={exercises1} />
      <Part part1={part2} exercises1={exercises2} />
      <Part part1={part3} exercises1={exercises3} />
    </div>
  );
};

export default Content;
