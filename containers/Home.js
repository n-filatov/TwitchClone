import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import Spinner from "../components/Spinner.js";
import GamePreview from "../components/GamePreview";
import { getAllGames } from "../helpers/api";
import { fetchGames } from "../actions/actions.js";

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGames(20));
  }

  openGameStreams(gameName) {
    Actions.gameStreams({ gameName, title: gameName });
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
    marginTop: 40
  },
  gamesList: {
    alignSelf: "stretch"
  }
});
