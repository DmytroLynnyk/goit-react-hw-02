import { useState } from "react";
import "./App.css";
// import { Options } from './components/options/options';
// import { Feedback } from './components/feedback/feedback';

const Button = ({ onUpdate, value, children }) => {
  return (
    <button onClick={onUpdate}>
      {children} - {value}
    </button>
  );
};

const Clicker = ({ value, onUpdate }) => {
  return (
    <div>
      <Button value={value} onUpdate={onUpdate}>
        Good
      </Button>
      <Button value={value} onUpdate={onUpdate}>
        Neutral
      </Button>
      <Button value={value} onUpdate={onUpdate}>
        Bad
      </Button>
    </div>
  );
};

export const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const goodFeedback = () => {
    setFeedbackState({
      ...feedbackState,
      good: good.value + 1,
    });
  };
  const neutralFeedback = () => {
    setFeedbackState({
      ...feedbackState,
      neutral: neutral.value + 1,
    });
  };
  const badFeedback = () => {
    setFeedbackState({
      ...feedbackState,
      bad: bad.value + 1,
    });
  };

  const [count, setCount] = useState(0);
  const habdleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Clicker value={count} onUpdate={habdleClick} />
    </>
  );
};
