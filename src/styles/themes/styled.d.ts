import IThemeProps from '../../interfaces/IThemeProps';

declare module 'styled-components' {
  interface DefaultTheme extends IThemeProps { }
}