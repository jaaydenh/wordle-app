import React from 'react';

function GuessInput({ handleSubmitGuess, status }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    handleSubmitGuess(guess);
    setGuess('');
    e.preventDefault();
  };

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          onChange={handleChange}
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          title="5 letter word"
          disabled={status !== 'playing'}
        />
      </form>
    </div>
  );
}

export default GuessInput;
