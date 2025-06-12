import styles from "./search.module.scss";

const SearchComponent = () => {
  return (
    <>
      {" "}
      <input
        className={styles.searchForm}
        type="text"
        placeholder="Поиск курсов..."
      />
    </>
  );
};

export default SearchComponent;
