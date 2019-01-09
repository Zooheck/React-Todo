import React from 'react'

const Todo = (props) => {
  const completedStyle = {
    textDecoration: "line-through"
  }
  return (
    <div>
        {props.taskList.map(task => {
            return <h2 
            onClick={() => props.toggleCompleted(task.id)}
            style={task.completed ? completedStyle : null}
            >{task.task}</h2>
        })}
    </div>
  )
}

export default Todo
