import { useEffect } from 'react';

function Form({ input, setInput, todos, setTodo, editTodo, setEditTodo }) {
  const uuid = Math.floor(Math.random() * 100);

  useEffect(
    function () {
      if (editTodo) setInput(editTodo.title);
      else setInput('');
    },
    [setInput, editTodo]
  );

  function onSubmitForm(e) {
    function updateTodo(title, id, completed) {
      const newTodo = todos.map((todo) =>
        todo.id === id ? { title, id, completed } : todo
      );
      setTodo(newTodo);
      setEditTodo(' ');
    }

    e.preventDefault();
    if (!editTodo) {
      setTodo([...todos, { id: uuid, title: input, completed: false }]);
      setInput('');
    } else updateTodo(input, editTodo.id, editTodo.completed);
  }
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type='text'
          className='task-input'
          placeholder='Enter a Todo...'
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='button-add'>Add</button>
      </form>
    </div>
  );
}

export default Form;
