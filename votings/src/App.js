import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import MainPage from './pages/MainPage';
import createMuiTheme from 'material-ui/styles/createMuiTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme()}>
        <MainPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
