import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

import "../src/styles/styles.css";
import Statistic from "./components/statistic/Statistic";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div className="container">
      <Header course={course} />
      <div className="exercise1">
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
      <hr />
      <Statistic />
    </div>
  );
};

export default App;
