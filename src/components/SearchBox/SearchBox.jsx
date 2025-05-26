import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ({ children }) => {
  const query = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const rawValue = event.target.value;

    const filteredValue = rawValue
      .replace(/[^a-zA-Zа-яА-ЯґҐєЄіІїЇʼ' ]/g, "")
      .replace(/['ʼ]{2,}/g, "'")
      .replace(/\s{2,}/g, " ")
      .trim()
      .toLowerCase();

    dispatch(changeFilter(filteredValue));
  };

  const clearInput = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Type a name..."
        />
        {query && (
          <button
            className={styles.clearButton}
            onClick={clearInput}
            aria-label="Clear input"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
