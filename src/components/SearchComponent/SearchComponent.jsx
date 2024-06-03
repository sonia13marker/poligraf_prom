import SearchIcon from "../SearchIcon";
import styles from "./SearchComponent.module.scss";

export default function SearchComponent({ searchMock }) {
  return (
    <label htmlFor="searchInput" className={styles.search__label}>
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        className={styles.search__input}
        placeholder={searchMock}
        // value={UnQuery}
        // onChange={handleChangeSearch}
      />
      <span className={styles.search__label__img}>
        <SearchIcon />
      </span>
    </label>
  );
}
