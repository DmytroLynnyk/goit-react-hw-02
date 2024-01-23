import { useState, useEffect } from "react";
import "./App.css";
// import { Options } from './components/options/options';
// import { Feedback } from './components/feedback/feedback';

const Button = ({ onUpdate, children }) => {
  return <button onClick={onUpdate}>{children}</button>;
};

const Options = ({
  value: { good, neutral, bad },
  goodUpdate,
  neutralUpdate,
  badUpdate,
}) => {
  return (
    <div>
      <Button value={good} onUpdate={goodUpdate}>
        good
      </Button>
      <Button value={neutral} onUpdate={neutralUpdate}>
        neutral
      </Button>
      <Button value={bad} onUpdate={badUpdate}>
        bad
      </Button>
    </div>
  );
};

export const App = () => {
  const [feedbackState, setFeedbackState] = useState(() => {
    const sevedFeedbacks = window.localStorage.getItem("feedbacks-state");
    if (JSON.parse(sevedFeedbacks) !== null) {
      return JSON.parse(sevedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const goodFeedback = () => {
    setFeedbackState({
      ...feedbackState,
      good: feedbackState.good + 1,
    });
  };
  const neutralFeedback = () => {
    setFeedbackState({
      ...feedbackState,
      neutral: feedbackState.neutral + 1,
    });
  };
  const badFeedback = () => {
    setFeedbackState({
      ...feedbackState,
      bad: feedbackState.bad + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "feedbacks-state",
      JSON.stringify(feedbackState)
    );
  });

  const FeedbackStatus = () => {
    const totalFeedbacks =
      feedbackState.good + feedbackState.neutral + feedbackState.bad;
    const positiveFeedback = Math.round(
      ((feedbackState.good + feedbackState.neutral) / totalFeedbacks) * 100
    );
    return (
      <>
        good - {feedbackState.good}
        <br></br>
        neutral - {feedbackState.neutral}
        <br></br>
        bad - {feedbackState.bad}
        <br></br>
        total - {totalFeedbacks}
        <br></br>
        positive - {positiveFeedback}%<br></br>
      </>
    );
  };

  const Feedback = (value) => {
    return (
      <div>
        <FeedbackStatus value={value}>good</FeedbackStatus>
      </div>
    );
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        value={feedbackState}
        goodUpdate={goodFeedback}
        neutralUpdate={neutralFeedback}
        badUpdate={badFeedback}
      />
      <Feedback value={feedbackState} />
    </>
  );
};
