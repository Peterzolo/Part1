import Content from "./Content";
import Header from "./Header";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part1} exercises2={exercises1} />
      <Content part3={part1} exercises3={exercises1} />
    </div>
  );
};

export default App;
