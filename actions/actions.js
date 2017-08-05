import {getGames} from '../helpers/api.js';
import { Actions } from "react-native-router-flux";

export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const SELECT_GAME = 'SELECT_GAME';

const requestGames = () => {
  return {
    type: REQUEST_GAMES,
  }
}

const receiveGames = games => {
  return {
    type: RECEIVE_GAMES,
    games
  }
}

const selectGame = gameName => {
  return {
    type: SELECT_GAME,
    gameName
  }
}

export const openGamePage = gameName => {
  return dispatch => {
    Actions.gameStreams({title: gameName, gameName});
    dispatch(selectGame(gameName));
  }
}

export const fetchGames = numberOfGames => {
  return dispatch => {
    dispatch(requestGames());
    getGames(numberOfGames)
      .then(response => response.top)
      .then(games => dispatch(receiveGames(games)));
  }
}