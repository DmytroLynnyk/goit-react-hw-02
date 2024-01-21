import { useState } from 'react';
import './App.css'
// import { Options } from './components/options/options';
// import { Feedback } from './components/feedback/feedback';

const Clicker = ({value, onUpdate}) => {
  return (
    <div>
      <button onClick={onUpdate}>Total clicks - {value}</button>
      <button onClick={onUpdate}>Total clicks - {value}</button>
      <button onClick={onUpdate}>Total clicks - {value}</button>
    </div>
  );
};

export const App = () => {
  // const [feedbackState, setFeedbackState] = useState(
  //   {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  //   }
  // );

  const [count, setCount] = useState(0);

  const habdleClick = () => {
    setCount(count + 1)
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Clicker value={count} onUpdate={habdleClick}/>
    </>
  )
};