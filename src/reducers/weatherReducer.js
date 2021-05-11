import * as actions from '../actions/type';

export default function (state = null, action) {
  switch (action.type) {
    case actions.FETCH_WEATHER:
      return {
        ...state,
      };
  }
}
