import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';

import { GlobalStyle } from './styles/global';
import AppProvider from './hooks';
import Header from './components/Header';

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
        <GlobalStyle />
      </AppProvider>
    </>
  )
}

export default App;
