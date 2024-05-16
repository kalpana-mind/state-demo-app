import { useState } from 'react';

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) {
          return score + 1;
        } else {
          return score;
        }
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}: {score}
              <button onClick={() => incrementScore(idx)}>+1</button>
              {score >= target && <p>Winner!</p>}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
