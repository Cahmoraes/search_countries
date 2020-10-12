import React, { useState, useCallback, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/img/arrow_left.svg';

import {
  Main,
  Back,
  CountryWrapper,
  Flag,
  InfosWrapper,
  BorderCountries,
  CountryName,
} from './styles';

import ICountryProps from '../../interfaces/ICountryProps';
import api from '../../services/api';
import NotFound from '../../pages/Notfound';
import Loading from '../../Helper/Loading';
import CountryInfos from '../CountryInfos';
import CountryBorders from '../CountryBorders';

interface ParamsProps {
  name: string
}

const CountryPage: React.FC = () => {
  const { name } = useParams<ParamsProps>();
  const [data, setData] = useState<ICountryProps[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const countryFetch = useCallback(async () => {
    const response = await api.get<ICountryProps[]>(`/name/${name}`)
    setData(response.data)
  }, [name]);

  useEffect(() => {
    countryFetch();
  }, [countryFetch])

  if (error) return <NotFound />;
  else if (loading === true) return <Loading />;
  else if (data) {
    return (
      <Main>
        <Back>
          <Link to="/">
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
