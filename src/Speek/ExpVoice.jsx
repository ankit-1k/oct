import React, { useState } from 'react';

const ExpVoice = () => {
  const [text, setText] = useState('');
  const speak = () => {
    // if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    // } else {
    //   alert('Sorry, your browser does not support speech synthesis.');
    // }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
      />
      <button onClick={speak}>Speak</button>
    </div>
  );
};

export default ExpVoice;