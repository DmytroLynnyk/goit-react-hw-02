import css from "./feedback.module.css";
import { Notification } from "../notification/notification";

export const Feedback = ({
  feedbackState: { good, neutral, bad },
  total,
  positive,
}) => {
  return (
    <ul className={css.feedbackList}>
      <li>good - {good}</li>
      <li>neutral - {neutral}</li>
      <li>bad - {bad}</li>
      <li>total - {total}</li>
      <li>positive - {positive}%</li>
    </ul>
  );
};
