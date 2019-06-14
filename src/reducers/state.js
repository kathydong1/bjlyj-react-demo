import { combineReducers } from 'redux'
import {
  GET_INDEX,
  SET_INDEX
} from './action'

const index = Number(localStorage.getItem('index'));
function setIndex(state = index, action) {
  switch (action.type) {
    case SET_INDEX:
      state = action.index;
      localStorage.setItem('index',state);
      return state;
    case GET_INDEX:
    default:
      return state;
  }
}

const getIndex = combineReducers({
  setIndex
});

export default getIndex
