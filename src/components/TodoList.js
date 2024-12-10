function TodoList({ todos, setTodo, setEditTodo }) {
  function handleDelete(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  function handleComplete(todo) {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) return { ...item, completed: !item.completed };
        else return todos;
      })
    );
  }

  function handleEdit(id) {
    setEditTodo(todos.find((todo) => todo.id === id));
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`list-item ${todo.completed ? 'complete' : ''}`}
            onChange={(e) => e.preventDefault()}
          />
          <button
            className='button-complete task-button'
            onClick={() => handleComplete(todo)}
          >
            ✔
          </button>
          <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
            ✏️
          </button>
          <button
            className='button-delete task-button'
            onClick={() => handleDelete(todo.id)}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
