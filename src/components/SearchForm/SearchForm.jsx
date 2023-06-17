import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ qwqwqw }) => {
  const [query, setQuery] = useState('');
  const handleChahge = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Select any region!!!');
      return;
    }
    qwqwqw(query);
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={handleChahge}
        defaultValue="default"
      >
        <option value={'default'} disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
