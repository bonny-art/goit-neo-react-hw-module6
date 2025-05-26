import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onInput, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onInput}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default SearchBox;
