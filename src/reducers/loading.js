import {RECEIVE_DATA} from '../actions/shared.js'

export default function loading(state = true, action) {
    if (action.type === RECEIVE_DATA) {
        return false
    } else {
        return state
    }
}
