import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  SELECT_GAME,
} from '../actions/actions.js';
import { combineReducers } from 'redux';

const initialState = {
  games: [],
  streams: [],
  isFetching: false,
  numberOfGames: 0
}

const loadedGames = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
        ...state,
        isFetching: true,
      }
    case  RECEIVE_GAMES:
      return {
        ...state,
        isFetching: false,
        games: action.games,
        numberOfGames: action.games.length
      }
    case SELECT_GAME:
      return {
        ...state,
        selectedGame: action.gameName
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers(
  {
    loadedGames
  }
);

export default rootReducer;