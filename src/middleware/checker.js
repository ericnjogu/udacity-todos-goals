import {ADD_TODO} from '../actions/todos'
import {ADD_GOAL} from '../actions/goals'

const checker = (store) => (next) => (action) => {
    const checkGun = (item) => item.name.toLowerCase().includes("gun")
    let hasGun = action.type === ADD_TODO ? checkGun(action.todo) : false
    hasGun = hasGun || action.type === ADD_GOAL ? checkGun(action.goal) : false

    return hasGun ? window.status = "Guns not allowed" : next(action)
}

export default checker