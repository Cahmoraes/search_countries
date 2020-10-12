import React from 'react'

import Select from '../Form/Select/'
import Search from '../Form/Search/'
import { Header } from './styles'
import { IRegion } from '../../interfaces/IRegion';


interface FetchHeaderProps {
  select: string
  setSelect: React.Dispatch<React.SetStateAction<string>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const options: IRegion[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Oceania', label: 'Oceania' },
];

const FetchHeader: React.FC<FetchHeaderProps> = ({ select, setSelect, search, setSearch }) => {


  return (
    <Header>
      <Search search={search} setSearch={setSearch} />
      <Select select={select} setSelect={setSelect} options={options} />
    </Header>
  )
}

export default FetchHeader;
