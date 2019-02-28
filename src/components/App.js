import React, { Component } from 'react';
import ItemList from './ItemList'
import {connect} from 'react-redux'
import {handleRemoveTodo, handleToggleTodo, handleAddTodo} from '../actions/todos'
import  {handleRemoveGoal, handleToggleGoal, handleAddGoal} from '../actions/goals'
import {handleReceiveData} from '../actions/shared'

class App extends Component {

  componentDidMount() {

    // refresh is setup by the connected component glue code
    //this.props.store.subscribe(() => this.forceUpdate())

    this.props.dispatch(handleReceiveData())
  }

  render() {
    const {todos, goals, loading} = this.props
    if (loading) {
      return <h3>loading...</h3>
    }
    return (
        <div>
          <ItemList items={todos} add={handleAddTodo} item_title="TODO" toggle={handleToggleTodo} remove={handleRemoveTodo}/>
          <ItemList items={goals} add={handleAddGoal} item_title="Goal" toggle={handleToggleGoal} remove={handleRemoveGoal}/>
        </div>
    )
  }
}

export default connect(state => ({
  todos: state.todos,
  goals: state.goals,
  loading: state.loading
}))(App);
