import React, { useCallback } from 'react';

import { ReactComponent as Moon } from '../../assets/img/moon.svg';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { Link } from 'react-router-dom';
import { Template, Container, Title, Switch } from './styles';
import { useTheme } from '../../hooks/theme'

const Header: React.FC = () => {

  const { setTheme, defaultTheme } = useTheme()

  const capitalize = useCallback((text: string) => {
    return text[0].toLocaleUpperCase() + text.slice(1)
  }, [])

  const switchTheme = useCallback(() => {
    if (defaultTheme.title === 'light') {
      setTheme(dark)
    } else {
      setTheme(light)
    }
  }, [setTheme, defaultTheme.title])

  return (
    <Template>
      <Container>
        <Title>
          <Link to="">Where in the world?</Link>
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
