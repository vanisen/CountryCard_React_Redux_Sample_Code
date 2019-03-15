import React, { Component } from 'react';
import './App.css';
import CountriesContainer from '../containerComponents/CountriesContainer';
import HeaderBar from './header/HeaderBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Provider } from 'react-redux'
import store from '../store';


const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Laila"',
      'serif',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <HeaderBar />
            <CountriesContainer />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
