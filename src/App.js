import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import Home from './views/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
