import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Button } from './styles';

interface CountryBorders {
  codes: any[]
}

interface BorderProps {
  name: string
}

const CountryBorders: React.FC<CountryBorders> = ({ codes }) => {
  const [borders, setBorders] = useState<BorderProps[]>([]);

  useEffect(() => {
    const codeFetch = async () => {
      let codeList = '';
      codes.map((code, i) =>
        i < codes.length - 1 ? (codeList += code + ';') : (codeList += code),
      );
      const response = await api.get<BorderProps[]>(`/alpha?codes=${codeList}`)
      setBorders(response.data);
    };
    codeFetch();
  }, [codes]);

  return (
    <>
      {borders.map(({ name }) => (
        <Button key={name}>
          <Link to={`/country/${name.toLowerCase()}`}>
            {name}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default CountryBorders;
