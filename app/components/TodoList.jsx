import React, { Component } from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI'

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return <Todo key={todo.id} {...todo}/>
      });
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
