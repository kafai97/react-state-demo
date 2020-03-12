import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
})

const todosSlice = createSlice({
  name: 'todos',
  initialState: [{ id: 0, text: 'init', completed: false }],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const { actions, reducer } = counterSlice
export const { increment, decrement } = actions

export const store = configureStore({
  reducer: counterSlice.reducer,
})
