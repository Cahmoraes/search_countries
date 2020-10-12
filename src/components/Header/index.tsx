import React, { useCallback, useEffect, useState } from 'react';

import { ReactComponent as Moon } from '../../assets/img/moon.svg';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { Link } from 'react-router-dom';
import { Template, Container, Title, Switch } from './styles';
import { useTheme } from '../../hooks/theme'
import IThemeProps from '../../interfaces/IThemeProps';

const Header: React.FC = () => {

  const { setTheme, defaultTheme } = useTheme()
  const [storagedTheme, setStoragedTheme] = useState<IThemeProps | null>(() => {
    const storaged = window.localStorage.getItem('@Countries:localStorage')
    if (storaged) return JSON.parse(storaged)
    else return null
  })

  useEffect(() => {
    if (storagedTheme) {
      setTheme(storagedTheme)
    }
  }, [setTheme, storagedTheme])

  const capitalize = useCallback((text: string) => {
    return text[0].toLocaleUpperCase() + text.slice(1)
  }, [])

  const switchTheme = useCallback(() => {
    if (defaultTheme.title === 'light') {
      setTheme(dark)
      setStoragedTheme(dark)
      window.localStorage.setItem('@Countries:localStorage', JSON.stringify(dark))
    } else {
      setTheme(light)
      setStoragedTheme(light)
      window.localStorage.setItem('@Countries:localStorage', JSON.stringify(light))
    }
  }, [setTheme, defaultTheme.title])

  return (
    <Template>
      <Container>
        <Title>
          <Link to="/search_countries">Where in the world?</Link>
        </Title>
        <Switch onClick={switchTheme}>
          <Moon />
          <span>{capitalize(defaultTheme.title)} Mode</span>
        </Switch>
      </Container>
    </Template>
  );
};

export default Header;
