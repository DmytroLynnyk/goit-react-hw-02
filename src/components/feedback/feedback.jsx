import css from "./feedback.module.css";
import { Notification } from "../notification/notification";

export const Feedback = ({ feedbackState: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);
  if (totalFeedback !== 0) {
    return (
      <ul className={css.feedbackList}>
        <li>good - {good}</li>
        <li>neutral - {neutral}</li>
        <li>bad - {bad}</li>
        <li>total - {totalFeedback}</li>
        <li>positive - {positiveFeedback}%</li>
      </ul>
    );
  }
  return <Notification />;
};
