import React from 'react'

const Todo = (props) => {
  return (
    <div>
        {props.taskList.map(task => {
            return <h2>{task.task}</h2>
        })}
    </div>
  )
}

export default Todo
