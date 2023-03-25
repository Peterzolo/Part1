import React, { useState } from "react";
import { anecdotes } from "../../anecdote";
import { Button } from "../button/Button";

import "../statistic/Statistic.css";

const Anecdote = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleAnecdoteVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p className="anecdotes">{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button className="btn" text="next Anecdote" onClick={handleClick} />
      <hr />

      <Button
        text="Vote"
        className="btn"
        onClick={() => handleAnecdoteVote(votes)}
      />

      <span>{votes[votes]}</span>

      <h2>Anecdote with most votes:</h2>
      <p className="anecdotes">{anecdotes[mostVotedIndex]}</p>
      <p className="total-votes">has {votes[mostVotedIndex]} votes</p>
    </div>
  );
};

export default Anecdote;
