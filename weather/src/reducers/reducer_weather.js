import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // never edit existing state, create new
      return [ action.payload.data, ...state ];
  }
  return state;
};