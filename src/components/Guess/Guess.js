import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const results = checkGuess(guess, answer);

  return (
    <div>
      <p className="guess">
        {range(5).map((pos) => (
          <span key={pos} className={`cell ${results && results[pos].status}`}>
            {(guess && guess[pos]) || undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
