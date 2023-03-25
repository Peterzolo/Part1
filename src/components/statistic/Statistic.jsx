import React, { useState } from "react";
// import { Button } from "../button/Button";

const Statistic = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = (feedback) => {
    setGood(feedback);
  };
  const handleNeutral = (feedback) => {
    setNeutral(feedback);
  };
  const handleBad = (feedback) => {
    setBad(feedback);
  };

  const total = good + neutral + bad;
  const averageScore = total / 3;
  let percentageOfpositive = (good / 100) * 100;

  return (
    <div>
      <h3>Customers' Feedback</h3>
      <div className="button-group">
        {good}
        <button onClick={() => handleGood(good + 1)}>Good</button>
        <button onClick={() => handleNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => handleBad(bad + 1)}>Bad</button>
      </div>
      <h4>Statistic</h4>

      <div className="stat-wrap">
        <ul>
          <li>Good : {good}</li>
          <li>Neutral : {neutral}</li>
          <li>Bad : {bad}</li>
        </ul>
        <div className="section-wrap">
          <div className="total">Total feedback : {total}</div>
          <div className="total">Average : {averageScore}</div>
          <div className="total">
            Percent of positive : {percentageOfpositive}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
