var setTodos = (todos) => {
  if (Array.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
};

var getTodos = () => {
  var stringTodos = localStorage.getItem('todos');
  var todos = [];

  try {
    todos = JSON.parse(stringTodos);
  } catch(e) {

  }

  return Array.isArray(todos) ? todos : [];
};

var filterTodos = (todos, showCompleted, searchText) => {
  var filteredTodos = todos;

  // filter by showCompleted
  // if todo.completed === false, then it shows up
  // if todo.completed === true, then it doesn't show up, but
  // if showCompleted === true, then it shows up
  filteredTodos = filteredTodos.filter(todo => {
    return !todo.completed || showCompleted;
  });

  // filter by searchText

  filteredTodos = filteredTodos.filter(todo => {
    var todoText = todo.text.toLowerCase();
    return searchText.length === 0 || todoText.indexOf(searchText) > -1;
  });

  // sort todos with non-completed first
  filteredTodos.sort((a, b) => {
    if (a.completed === false && b.completed === true) {
      return -1;
    }
    if (a.completed === true && b.completed === false) {
      return 1;
    }
    return 0;
  });

  return filteredTodos;
}

// Following also works
// var TodoAPI = { setTodos, getTodos };

export default { setTodos, getTodos, filterTodos };
