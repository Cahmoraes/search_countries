export default interface ICountryProps {
  name: string
  population: number
  flag: string
  region: string
  capital: string
  borders: []
  nativeName: string
  subregion: string
  topLevelDomain: string
  currencies: [
    {
      name: string
    }
  ]
  languages: [
    {
      name: string
    }
  ]
}