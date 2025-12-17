import {useRef} from 'react';

function TodoForm({onAddTodo}){

    const todoTitleInput = useRef("");
    function handleAddTodo(event){
        event.preventDefault();
        const title = event.target.title.value;
        onAddTodo(title);
        event.target.title.value = "";
        todoTitleInput.current.focus()
    }
    return (
        <div>
          <form onSubmit={handleAddTodo}>
            <label>
                Todo
                <input id="text" name="title" ref={todoTitleInput} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}

export default TodoForm