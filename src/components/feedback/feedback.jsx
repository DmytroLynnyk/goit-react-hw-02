import css from "./feedback.module.css";

export const Feedback = ({ feedbackState: { good, neutral, bad } }) => {
  const totalFeedbacks = good + neutral + bad;
  const positiveFeedback = Math.round(
    ((good + neutral) / totalFeedbacks) * 100
  );
  if (totalFeedbacks !== 0) {
    return (
      <>
        good - {good}
        <br></br>
        neutral - {neutral}
        <br></br>
        bad - {bad}
        <br></br>
        total - {totalFeedbacks}
        <br></br>
        positive - {positiveFeedback}%<br></br>
      </>
    );
  }
  return "No feedback yet";
};
