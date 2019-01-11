// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'
import SearchForm from './SearchForm'
import './Todo.css'
const TodoList = (props) => {
  return (
    <div className="red app-container">
      <div className="form-container">
        <TodoForm
          task={props.task}
          handleChanges={props.handleChanges}
          addTask={props.addTask}
          clearCompleted={props.clearCompleted}
          
          
          />
          <SearchForm 
          searchTasks={props.searchTasks}
          searchValue={props.searchValue}
          />

      </div>
        
        <Todo toggleCompleted={props.toggleCompleted} taskList={props.taskList}/>
        
        
    </div>
  )
}

export default TodoList
