import API from 'goals-todos-api'

export const RECEIVE_DATA = "RECEIVE_DATA"

function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        goals,
        todos
    }
}

export function handleReceiveData() {
    return (dispatch) => {
        Promise.all([

                API.fetchGoals(),
                API.fetchTodos()
            ]
        ).then(([goals, todos]) => {
                console.log("goals from API", goals)
                console.log("todos from API", todos)
                dispatch(receiveData(todos, goals))
            }
        )
    }
}