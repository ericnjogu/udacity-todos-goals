import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id: id
    }
}

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id:id
    }
}

export function handleRemoveTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id))
        API.deleteTodo(todo.id).catch(() => {
            alert('Failed to delete todo')
            dispatch(addTodo(todo))
        })
    }
}

export function handleToggleTodo(id) {
    return (dispatch) => {
        dispatch(toggleTodo(id))
        API.saveTodoToggle(id).catch(() => {
            alert('toggle todo failed')
            dispatch(toggleTodo(id))
        })
    }
}

export function handleAddTodo(item_name, resetField) {
    return (dispatch) => {
        API.saveTodo(item_name).then((item) => {
            dispatch(addTodo(item))
            resetField()
        }).catch(() => alert('could not add item, please retry'))
    }
}
