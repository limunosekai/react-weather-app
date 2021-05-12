import * as actions from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case actions.FETCH_WEATHER:
      return [...state, action.payload.data];
    default:
      return state;
  }
}
