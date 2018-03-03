import uuidv1 from 'uuid/v1';
import { List, Map } from 'immutable';
import { ADD_TODO, COMPLETE_TODO } from '../../actions/todo/todoAction';

const stateDefault = List();
export default function (state = stateDefault, action) {
  switch (action.type) {
    case ADD_TODO: {
      if (action.text !== '') {
        return state.push(Map({
          id: uuidv1(),
          text: action.text,
          completed: false
        }));
      }
      return state;
    }
    case COMPLETE_TODO: {
      const index = state.findIndex(obj => obj.get('id') === action.id);
      return state.splice(index, 1, state.get(index).set('completed', true));
    }
    default:
      return state;
  }
}
