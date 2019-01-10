import React from 'react'
import './Todo.css'
const TodoForm = (props) => {
  return (
    <form>
      <input
      value={props.task}
      name="task"
      type="text"
      placeholder="Add a new task"
      onChange={props.handleChanges}
      />
      <div className="form-container">
        <button onClick={props.addTask}>Add task</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </div>
      
    </form>
  )
}

export default TodoForm