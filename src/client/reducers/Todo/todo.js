import uuidv1 from 'uuid/v1';
import { ADD_TODO, COMPLETE_TODO } from '../../actions/todo/todoAction';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      if (action.text !== '') {
        return [
          ...state,
          {
            id: uuidv1(),
            text: action.text,
            completed: false
          }
        ];
      }
      return state;
    }
    case COMPLETE_TODO: {
      let index = 0;
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.id) {
          index = i;
          break;
        }
      }
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: true
        }),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
