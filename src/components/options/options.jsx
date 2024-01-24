import css from "./options.module.css";

export const Options = ({
  value: { good, neutral, bad },
  goodUpdate,
  neutralUpdate,
  badUpdate,
  resetUpdate,
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
      <Button onUpdate={resetUpdate}>reset</Button>
    </div>
  );
};

const Button = ({ onUpdate, children }) => {
  return <button onClick={onUpdate}>{children}</button>;
};
