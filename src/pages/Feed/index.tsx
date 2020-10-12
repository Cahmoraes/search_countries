import React, { useState, useEffect } from 'react'
import CountryCard from '../../components/CountryCard'

import CountrySearch from '../../components/CountrySearch'
import FetchHeader from '../../components/FetchHeader'
import ICountryProps from '../../interfaces/ICountryProps'
import api from '../../services/api'
import { Main, Ul } from './styles'

const Feed: React.FC = () => {

  const [data, setData] = useState<ICountryProps[]>([])
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function requestData() {
      const response = await api.get<ICountryProps[]>('/all?fields=name;capital;population;region;flag')
      setData(response.data)
    }
    requestData()
  }, [])

  return (
    <>
      <Main>
        <FetchHeader
          search={search}
          setSearch={setSearch}
          select={region}
          setSelect={setRegion}
        />
        <Ul>
          {region
            ? data.map((country) => {
              if (country.region === region) {
                return search ? (
                  <CountrySearch
                    key={country.name}
                    country={country}
                    search={search}
                  />
                ) : (
                    <CountryCard key={country.name} country={country} />
                  );
              } else return null;
            })
            : data.map((country) => {
              return search ? (
                <CountrySearch
                  key={country.name}
                  country={country}
                  search={search}
                />
              ) : (
                  <CountryCard key={country.name} country={country} />
                );
            })}
        </Ul>
      </Main>
    </>
  )
}

export default Feed