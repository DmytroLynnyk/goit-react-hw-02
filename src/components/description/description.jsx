import css from "./description.module.css";

export const Description = () => {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};
