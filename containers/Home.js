import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Spinner from '../components/Spinner.js';
import GamePreview  from '../components/GamePreview';
import { getAllGames } from '../helpers/api';

export default class Home extends React.Component {
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

  openGameStreams(gameName) {
    Actions.gameStreams({gameName, title: gameName});
  }

  render() {
    if(this.state.games.length === 0) {
      return <Spinner/>
    } else {
      const gamesList = this.state.games.map( (gameInfo, i) => {
        return (<GamePreview
          key={i}
          name={gameInfo.game.name}
          imageUri={gameInfo.game.box.medium}
          viewers={gameInfo.viewers}
          onPress={() => this.openGameStreams(gameInfo.game.name)}
          />)
      });

      return (
        <View style={styles.container}>
          <ScrollView style={styles.gamesList}>{ gamesList }</ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  gamesList: {
    alignSelf: 'stretch'
  }
});
