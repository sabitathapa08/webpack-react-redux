import { fromJS } from "immutable";
import * as types from './constants';

export const initialState = fromJS({
  title: 'my first react redux app',
  author: 'sabita',
  requesting: false,
  error: false,
  list: {},
})

function Rootreducers(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_DEFAULT_REQUEST:
      return state.merge({
        requesting: true
      });
    case types.LOAD_DEFAULT_SUCCESS:
      return state.merge({
        requesting: false,
        list: action.response
      })
    case types.LOAD_DEFAULT_FAILURE:
      return state.merge({
        requesting: false,
        error: true,
      })
    default:
      return state;
  }
}

export default Rootreducers;