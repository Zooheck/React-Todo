// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'
const TodoList = (props) => {
  return (
    <div>
        <Todo />
        <TodoForm />
    </div>
  )
}

export default TodoList
