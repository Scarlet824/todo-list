import TodoListItem from "./TodoListItem";

function TodoList({todoList, onCompleteTodo}) {
  const mapTodoList = todoList.filter(
    (todo) => !todo.isCompleted
  );

  if (mapTodoList.length === 0) {
    return <p>Add todo above to get started</p>;
  }
  else {
    return (
    <ul>
      {mapTodoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
    );
  } 
}

export default TodoList;