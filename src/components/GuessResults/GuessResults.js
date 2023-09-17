import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNumber) => (
        <Guess key={guessNumber} guess={guesses[guessNumber]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
