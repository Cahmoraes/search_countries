import React, { useCallback, useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import Loading from '../../Helper/Loading';
import { ReactComponent as Arrow } from '../../assets/img/arrow_left.svg';
import NotFound from '../Notfound';
import CountryInfos from '../../components/CountryInfos';
import CountryBorders from '../../components/CountryBorders';
import {
  Main,
  Back,
  CountryWrapper,
  Flag,
  InfosWrapper,
  BorderCountries,
  CountryName,
} from './styles';
import api from '../../services/api';
import ICountryProps from '../../interfaces/ICountryProps';

interface ParamsProps {
  name: string
}

const CountryPage: React.FC = () => {

  const { name } = useParams<ParamsProps>();
  const [data, setData] = useState<ICountryProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const countryFetch = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.get<ICountryProps[]>(`/name/${name}`);
      setData(response.data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [name]);

  useEffect(() => {
    countryFetch();
  }, [countryFetch]);

  if (error) return <NotFound />;
  else if (loading === true) return <Loading />;
  else if (data.length > 0) {
    return (
      <Main>
        <Back>
          <Link to="/search_countries">
            <Arrow /> <span>Back</span>
          </Link>
        </Back>
        <CountryWrapper>
          <Flag>
            <img src={data[0].flag} alt={data[0].name} />
          </Flag>
          <InfosWrapper>
            <CountryName>{data[0].name}</CountryName>
            <CountryInfos data={data} />
            {data[0].borders.length ? (
              <BorderCountries>
                <h3>Border Countries:</h3>
                <CountryBorders codes={data[0].borders} />
              </BorderCountries>
            ) : (
                <span></span>
              )}
          </InfosWrapper>
        </CountryWrapper>
      </Main>
    );
  } else return null;
};

export default CountryPage;
