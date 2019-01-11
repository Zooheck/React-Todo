import React from 'react'
import './Todo.css'
const Todo = (props) => {
  const completedStyle = {
    textDecoration: "line-through"
  }
  return (
    <div className="todo-container">
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
