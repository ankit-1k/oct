// import React, { useEffect, useState } from 'react';
// import './setinterval.css'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const Setinterval = () => {
//   const [message, setMessage] = useState('');
//   const commands = [
//     {
//       command: 'shut up',
//       callback: () => setMessage('I wasn\'t talking.')
//     },
//     {
//       command: 'Hello',
//       callback: () => setMessage('Hi there!')
//     },
//     {
//       command:['who is this','who are you'],
//       callback: () => setMessage('i am Ai Bot')
//     },
//     {
//       command:['really'],
//       callback: () => setMessage('yeah')
//     },
//     {
//       command:[`please don't take my job`],
//       callback: () => setMessage('no bsdk dont worry')
//     },
//   ];

//   const {
//     transcript,
//     interimTranscript,
//     finalTranscript,
//     resetTranscript,
//     listening,
//   } = useSpeechRecognition({ commands });

//   useEffect(() => {
//     if (finalTranscript !== '') {
//       console.log('Got final result:', finalTranscript);
//     }
//   }, [interimTranscript, finalTranscript]);

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return null;
//   }

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
//   }

//   const listenContinuously = () => {
//     SpeechRecognition.startListening({
//       continuous: true,
//       language: 'en-GB',
//     });
//   };

//   return (
//     <div>
//       <div>
//         <span>
//           listening:
//           {' '}
//           {listening ? 'on' : 'off'}
//         </span>
//         <div>
//           <button type="button" onClick={resetTranscript}>Reset</button>
//           <button type="button" onClick={listenContinuously}>Listen</button>
//           <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
//         </div>
//       </div>
//       <div className="chating">
//       <div className="me text-danger">
//           <h2>User</h2>
//           <div>
//             <span>{transcript}</span>
//           </div>
//         </div>
//         <div className="bot">
//           <h2>Bot</h2>
//           <div>
//             {message}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setinterval;
import React from 'react'

const Setinterval = () => {
  return (
    <div>
      <h1>Ready</h1>
    </div>
  )
}

export default Setinterval
