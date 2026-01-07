import {useRef, useState} from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({onAddTodo}) {
  const [workingTodoTitle, setWorkingTodo] = useState("");
  const todoTitleInput = useRef("");

  function handleAddTodo(event) {
    event.preventDefault();

    onAddTodo(workingTodoTitle);

    setWorkingTodo("");

    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId="todoTitle"
        label="Todo"
        ref= {todoTitleInput}
        value= {workingTodoTitle}
        onChange={(event) =>
          setWorkingTodo(event.target.value)
        }
      />
      <button
        type="submit"
        disabled={workingTodoTitle === ""}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;