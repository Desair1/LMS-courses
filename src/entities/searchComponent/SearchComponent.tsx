import { useEffect, useState } from "react";

interface ISearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent = ({ onSearch }: ISearchComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <>
      <input
        type="text"
        placeholder="Поиск курсов..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export default SearchComponent;
