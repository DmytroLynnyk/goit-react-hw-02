import css from "./options.module.css";

export const Options = ({
  value: { good, neutral, bad },
  goodUpdate,
  neutralUpdate,
  badUpdate,
  resetUpdate,
}) => {
  return (
    <div className={css.options}>
      <Button value={good} onUpdate={goodUpdate}>
        good
      </Button>
      <Button value={neutral} onUpdate={neutralUpdate}>
        neutral
      </Button>
      <Button value={bad} onUpdate={badUpdate}>
        bad
      </Button>
      <ResetButton value={good + neutral + bad} onUpdate={resetUpdate}>
        reset
      </ResetButton>
    </div>
  );
};

const Button = ({ onUpdate, children }) => {
  return <button onClick={onUpdate}>{children}</button>;
};

const ResetButton = ({ value, onUpdate, children }) => {
  if (value > 0) {
    return <button onClick={onUpdate}>{children}</button>;
  }
};
