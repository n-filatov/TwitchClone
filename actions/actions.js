import {getGames} from '../helpers/api.js';

export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';

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

export const fetchGames = numberOfGames => {
  return dispatch => {
    dispatch(requestGames());
    getGames(numberOfGames)
      .then(response => response.top)
      .then(games => dispatch(receiveGames(games)));
  }
}