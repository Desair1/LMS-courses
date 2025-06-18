import { useEffect, useState } from "react";
import styles from "./search.module.scss";
interface ISearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent = ({ onSearch }: ISearchComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const searchRegex = /^[a-zA-Zа-яА-Я0-9\s]*$/;

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if (searchRegex.test(searchValue)) {
      setSearchTerm(searchValue);
    }
  };

  return (
    <>
      <input
        className={styles.searchForm}
        type="text"
        placeholder="Поиск курсов..."
        onChange={(event) => handleChange(event)}
      />
    </>
  );
};

export default SearchComponent;
