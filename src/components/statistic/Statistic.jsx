import { Button } from "../button/Button";
import StatisticLine from "../StatisticLine";

import "./Statistic.css";

const Statistic = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
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
      <h3 className="title">Give Feedback</h3>
      <div className="button-group">
        <Button
          className="btn"
          text="Good"
          onClick={() => handleGood(good + 1)}
        />

        <Button
          className="btn"
          text="Neutral"
          onClick={() => handleNeutral(neutral + 1)}
        />
        <Button className="btn" text="Bad" onClick={() => handleBad(bad + 1)} />
      </div>
      <h4>Statistic</h4>
      {total ? (
        <div className="stat-wrap">
          <div>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
          </div>

          <div>
            <table>
              <tbody className="table-body">
                <tr className="text">
                  <th>Total</th>
                  <td>{total}</td>
                </tr>
                <tr className="text">
                  <th>Average</th>
                  <td>{averageScore}</td>
                </tr>
                <tr className="text">
                  <th>Positive</th>
                  <td>{percentageOfpositive}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>No Feedback</div>
      )}
    </div>
  );
};

export default Statistic;
