import React from 'react';
import Home from './containers/Home';
import GameStreams from './containers/GameStreams';
import LiveStreamContainer from './containers/LiveStreamContainer';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key={'root'}>
            <Scene key={'home'} component={Home} initial />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

