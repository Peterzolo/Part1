import React from "react";
import "./statistic/Statistic.css";

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tr className="table-wrap">
          <th className="text">{text}</th>
          <td>{value}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticLine;
