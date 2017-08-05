import {
  REQUEST_GAMES,
  RECEIVE_GAMES
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