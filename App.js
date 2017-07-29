import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getAllGames } from './helpers/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }
  componentDidMount() {
    getAllGames()
      .then(
        res => this.setState({games: res.top}),
        err => console.log(err)
      );
  }

  render() {
    if(this.state.games.length === 0) {
      return <Text>Loading</Text>
    } else {
      const gamesList = this.state.games.map( gameInfo => {
        return <Text>{gameInfo.game.name}</Text>
      });
      return <ScrollView>{ gamesList }</ScrollView>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
