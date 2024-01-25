import css from "./options.module.css";

export const Options = ({ showResetButton, onLeaveFeedback, resetUpdate }) => {
  return (
    <div className={css.options}>
      <button onClick={() => onLeaveFeedback("good")}>good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>bad</button>
      {showResetButton && <button onClick={resetUpdate}>reset</button>}
    </div>
  );
};
