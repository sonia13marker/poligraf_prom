import SearchIcon from "../../icons/SearchIcon";
import styles from "./SearchComponent.module.scss";

export default function SearchComponent({ searchMock, setValue, value }) {
  const handleInputChange = (event) => {
    setValue(event.target.value); // Обновляем состояние
  };
  return (
    <label htmlFor="searchInput" className={styles.search__label}>
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        className={styles.search__input}
        placeholder={searchMock}
        value={value}
        onChange={handleInputChange}
      />
      <span className={styles.search__label__img}>
        <SearchIcon />
      </span>
    </label>
  );
}
