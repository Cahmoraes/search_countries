import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.875rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.secondary};
  }

  li, button {
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    background: ${(props) => props.theme.colors.background};
    box-shadow: 1px 1px 0 ${(props) => props.theme.colors.shadow};
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 0.975rem;
    line-height: 1.5rem;
  }
`