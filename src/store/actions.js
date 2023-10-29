import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO_STATUS,
  SET_VISIBILITY_FILTER,
} from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: {
    id,
    text,
  },
});

export const toggleTodoStatus = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: {
    id,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});
