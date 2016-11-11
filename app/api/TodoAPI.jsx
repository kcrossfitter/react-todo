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

// Following also works
// var TodoAPI = { setTodos, getTodos };

export default { setTodos, getTodos };
