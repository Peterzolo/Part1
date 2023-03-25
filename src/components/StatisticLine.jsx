import React from "react";
import "./statistic/Statistic.css";

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr className="text">
            <th>{text}</th>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticLine;
