import css from "./feedback.module.css";

export const Feedback = ({ feedbackState: { good, neutral, bad } }) => {
  const totalFeedbacks = good + neutral + bad;
  const positiveFeedback = Math.round(
    ((good + neutral) / totalFeedbacks) * 100
  );
  if (totalFeedbacks !== 0) {
    return (
      <ul className={css.feedbackList}>
        <li>good - {good}</li>
        <li>neutral - {neutral}</li>
        <li>bad - {bad}</li>
        <li>total - {totalFeedbacks}</li>
        <li>positive - {positiveFeedback}%</li>
      </ul>
    );
  }
  return "No feedback yet";
};
