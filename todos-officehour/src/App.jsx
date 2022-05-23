import { useState } from 'react';
import './App.css';

function App() {
  const [todoText, setTodoText]= useState('');
  const [todos, setTodos]= useState([]);

  const onChangeHandler = (event) => {
    setTodoText(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodos = ([...todos, todoText]);
    setTodos(newTodos);
    setTodoText('');
  }

  const removeTodo = (targetTodo) => {
    const filteredTodos = todos.filter(todo => todo !== targetTodo);
    setTodos(filteredTodos);
  }
  const renderTodos = () => {
    if(todos.length <= 0 ) {
    return <p>Please add some todos!</p> 
  }
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todos}&nbsp;
            <button onClick={() => removeTodo(todo)}>X</button>
          </li>
          ))}
      </ul>
    )
  }

  return (
    <div>
    <h1>Todo App</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="todoText" value={todoText} onChange={onChangeHandler}/>
        <button type='submit'>Add todo</button>
      </form>
      {renderTodos()}     
     </div>
  );
}

export default App;
