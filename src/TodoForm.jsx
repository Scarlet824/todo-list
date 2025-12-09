function TodoForm(){
    return (
        <div>
          <form>
            <label>
                Todo
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
    )
}

export default TodoForm