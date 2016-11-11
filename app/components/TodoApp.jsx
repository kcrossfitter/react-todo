import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: uuid(), text: 'Walk the dog' },
        { id: uuid(), text: 'Clean the yard' },
        { id: uuid(), text: 'Leave mail on porch' },
        { id: uuid(), text: 'Play video games' }
      ],
      showCompleted: false,
      searchText: ''
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo(text) {
    var id = uuid();
    this.setState({
      todos: [
        ...this.state.todos, {id, text}
      ]
    });
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp;
