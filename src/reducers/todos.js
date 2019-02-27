import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions/todos.js'
import {RECEIVE_DATA} from '../actions/shared.js'

// pure function (reducer) to modify and return new state
export default function todos(state = [], action) {
    //console.log('todos() called')
    switch (action.type) {
        case ADD_TODO:
            return state = state.concat(action.todo)
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.complete = !todo.complete
                }
                return todo
            })
        case RECEIVE_DATA:
            return action.todos
        default:
            return state
    }
}