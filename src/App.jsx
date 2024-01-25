import { useState, useEffect } from "react";
import "./App.css";
import { Options } from "./components/options/options";
import { Feedback } from "./components/feedback/feedback";
import { Description } from "./components/description/description";
import { Notification } from "./components/notification/notification";

const getSavedFeedback = () => {
  const sevedFeedbacks = window.localStorage.getItem("feedbacks-state");
  if (JSON.parse(sevedFeedbacks) !== null) {
    return JSON.parse(sevedFeedbacks);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export const App = () => {
  const [feedbackState, setFeedbackState] = useState(getSavedFeedback);

  useEffect(() => {
    window.localStorage.setItem(
      "feedbacks-state",
      JSON.stringify(feedbackState)
    );
  });

  const resetFeedback = () => {
    setFeedbackState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const onLeaveFeedback = (type) => {
    setFeedbackState({
      ...feedbackState,
      [type]: feedbackState[type] + 1,
    });
  };

  const total = feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positive = Math.round(
    ((feedbackState.good + feedbackState.neutral) / total) * 100
  );

  return (
    <>
      <Description />
      <Options
        showResetButton={total !== 0}
        onLeaveFeedback={onLeaveFeedback}
        resetUpdate={resetFeedback}
      />
      {total ? (
        <Feedback
          feedbackState={feedbackState}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
