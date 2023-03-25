import React, { useState } from "react";

import "../statistic/Statistic.css";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  "The only way to go fast, is to go well.",
];

const Anecdote = () => {
  const [selected, setSelected] = useState(0);
  const [voteCount, setVoteCount] = useState(0);
  const [votes, setVotes] = useState([]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleAnecdoteVote = () => {
    setVoteCount(voteCount + 1);
    setVotes([...votes, voteCount + 1]);
  };

  return (
    <div>
      <h3>Random Anecdotes</h3>
      <p className="anecdotes">{anecdotes[selected]}</p>
      <button className="btn" onClick={handleClick}>
        next Anecdote
      </button>
      <hr />
      <button className="btn" onClick={handleAnecdoteVote}>
        Vote
      </button>

      <h4 className="num-vote"> Number of Votes :{voteCount}</h4>

      <ul className="anecdotes-votes">
        {votes.map((vote) => (
          <li key={vote}>Vote {vote}</li>
        ))}
      </ul>
    </div>
  );
};

export default Anecdote;
