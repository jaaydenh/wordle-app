import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('playing');

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus('win');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lose');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      {status === 'win' && <WinBanner numberOfGuesses={guesses.length} />}
      {status === 'lose' && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
