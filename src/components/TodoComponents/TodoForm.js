import React from 'react'

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
      <button onClick={props.addTask}>Add task</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
}

export default TodoForm