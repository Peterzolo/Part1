import StatisticLine from "../StatisticLine";

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
      <h3>Give Feedback</h3>
      <div className="button-group">
        <button onClick={() => handleGood(good + 1)}>Good</button>
        <button onClick={() => handleNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => handleBad(bad + 1)}>Bad</button>
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
              <tr className="table-wrap">
                <th className="text">Total</th>
                <td>{total}</td>
              </tr>
              <tr className="table-wrap">
                <th className="text">Average</th>
                <td>{averageScore}</td>
              </tr>
              <tr className="table-wrap">
                <th className="text">Positive</th>
                <td>{percentageOfpositive}</td>
              </tr>
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
