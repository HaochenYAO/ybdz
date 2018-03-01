import { TODO_NOT_VALID } from '../actions/todo/errorAction';
import { INTERNET_ERROR } from '../actions/common/errorAction';

export default (state = {
  type: '', // current error type
  data: '', // current error data
  count: 0, // total error count
}, action) => {
  switch (action.type) {
    case TODO_NOT_VALID:
    case INTERNET_ERROR: {
      return Object.assign({}, state, {
        type: action.type,
        data: action.message,
        count: state.count + 1,
      });
    }
    default:
      return state;
  }
};
