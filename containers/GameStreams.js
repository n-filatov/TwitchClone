import React from 'react';
import { Text } from 'react-native';
import { getStreamsOf } from '../helpers/api';

class GameStreams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: []
    }
  }

  componentDidMount() {
    getStreamsOf(this.props.gameName).then(
      res => console.log(res),
      error => console.log(error)
    )
  }

  render() {
    return <Text>{this.props.gameName}</Text>
  }
}

export default GameStreams;