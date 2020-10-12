import React from 'react';
import ICountryProps from '../../interfaces/ICountryProps';

import CountryCard from '../CountryCard';

interface CountrySearchProps {
  country: ICountryProps
  search: string
}

const CountrySearch: React.FC<CountrySearchProps> = ({ country, search }) => {
  const nameLowerCase = country.name.toLowerCase();

  return (
    <>
      {
        nameLowerCase.search(search) !== -1 && (
          <CountryCard key={country.name} country={country} />
        )
      }
    </>
  )
}

export default CountrySearch;
