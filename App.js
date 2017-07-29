import React from 'react';
import Home from './containers/Home';
import GameStreams from './containers/GameStreams';
import LiveStreamContainer from './containers/LiveStreamContainer';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene key={'home'} component={Home} initial />
          <Scene key={'gameStreams'} component={GameStreams}/>
          <Scene key={'watchStream'} component={LiveStreamContainer}/>
        </Scene>
      </Router>
    )
  }
}

