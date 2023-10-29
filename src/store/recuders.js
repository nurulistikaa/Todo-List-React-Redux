import { combineReducers } from 'redux';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO_STATUS,
  SET_VISIBILITY_FILTER,
} from './actionTypes';

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};

const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: action.payload.completed,
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case TOGGLE_TODO_STATUS:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const visibilityFilterReducer = (state = initialState.visibilityFilter, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default rootReducer;
