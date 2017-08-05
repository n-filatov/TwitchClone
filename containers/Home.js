import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView, TextInput} from "react-native";
import Spinner from "../components/Spinner.js";
import GamePreview from "../components/GamePreview";
import { getAllGames } from "../helpers/api";
import { fetchGames, openGamePage } from "../actions/actions.js";

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGames(20));
  }

  openGameStreams(gameName) {
    const { dispatch } = this.props;
    dispatch(openGamePage(gameName));
  }

  render() {
    const { isFetching, games } = this.props;
    if (isFetching) {
      return <Spinner />;
    } else {
      const gamesList = games.map((gameInfo, i) => {
        return (
          <GamePreview
            key={i}
            name={gameInfo.game.name}
            imageUri={gameInfo.game.box.medium}
            viewers={gameInfo.viewers}
            onPress={() => this.openGameStreams(gameInfo.game.name)}
          />
        );
      });

      return (
        <View style={styles.container}>
          <View style={{ alignItems: 'stretch', height: 20 }}>
            <TextInput value={"Trash"} style={ styles.searchInput }/>
          </View>
          <ScrollView style={styles.gamesList}>
            {gamesList}
          </ScrollView>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  const { loadedGames } = state;
  const { isFetching, games } = loadedGames;

  return {
    isFetching,
    games
  }
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gamesList: {
    alignSelf: "stretch"
  },
  searchInput: {
    width: 320,
    height: 25,
    backgroundColor: 'red'
  }
});
