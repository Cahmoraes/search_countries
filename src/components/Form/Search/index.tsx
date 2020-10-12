import React, { useCallback, SetStateAction, ChangeEvent } from 'react';
import { SearchWrapper, Input, Label } from './styles';
import { ReactComponent as SearchSvg } from '../../../assets/img/search.svg';

interface SearchProps {
  search: string,
  setSearch: React.Dispatch<SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value.toLowerCase())
  }, [setSearch])

  return (
    <SearchWrapper>
      <Label htmlFor="search">
        <SearchSvg />
        Search for a country...
      </Label>
      <Input
        id="search"
        type="text"
        placeholder="Search for a country..."
        autoComplete="off"
        value={search}
        onChange={handleChange}
      />
    </SearchWrapper>
  );
};

export default Search;
