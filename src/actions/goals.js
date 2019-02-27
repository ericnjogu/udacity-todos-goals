import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'
export const TOGGLE_GOAL = 'TOGGLE_GOAL'

function toggleGoal(id) {
    return {
        type: TOGGLE_GOAL,
        id:id
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id:id
    }
}

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

export function handleRemoveGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))

        API.deleteGoal(goal.id).catch(() => {
            alert('Failed to delete goal')
            dispatch(addGoal(goal))
        })
    }
}

export function handleAddGoal(item_name, resetField) {
    return (dispatch) => {
        API.saveGoal(item_name).then((item) => {
            dispatch(addGoal(item))
            resetField()
        }).catch(() => alert('could not add item, please retry'))
    }
}