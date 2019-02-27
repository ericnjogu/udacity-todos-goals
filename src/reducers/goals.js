import {ADD_GOAL, REMOVE_GOAL, TOGGLE_GOAL} from '../actions/goals.js'
import {RECEIVE_DATA} from '../actions/shared.js'

// pure function (reducer) to modify and return new state
export default function goals(state = [], action) {
    //console.log('goals() called')
    switch (action.type) {
        case ADD_GOAL:
            return state = state.concat(action.goal)
        case REMOVE_GOAL:
            return state.filter(goal => goal.id !== action.id)
        case TOGGLE_GOAL:
            return state.map(goal => goal.id === action.id ? Object.assign({}, goal, {complete: !goal.complete}) : goal)
        case RECEIVE_DATA:
            return action.goals
        default:
            return state
    }
}