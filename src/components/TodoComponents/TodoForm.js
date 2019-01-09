import React from 'react'

const TodoForm = (props) => {
  return (
    <form>
      <input
      value={props.task}
      name="task"
      type="text"
      placeholder="Add a new task"
      />
      <button>Add task</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm