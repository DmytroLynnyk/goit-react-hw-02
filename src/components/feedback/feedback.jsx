import css from "./feedback.module.css";

export const Feedback = ({ feedbackState }) => {
  const totalFeedbacks =
    feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positiveFeedback = Math.round(
    ((feedbackState.good + feedbackState.neutral) / totalFeedbacks) * 100
  );
  if (totalFeedbacks !== 0) {
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
  }
  return "No feedback yet";
};
