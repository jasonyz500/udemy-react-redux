import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // ES5 syntax:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      // es6. square brackets mean to add a new key into the object, with a value
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}