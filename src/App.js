import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const toDoItems = [
  { task: 'finish building ToDo App', id: Date.now(), completed: false},
  { task: 'work out', id: Date.now(), completed: false },
  { task: 'pray the rosary', id: Date.now(), completed: false },
  { task: 'brush my teeth', id: Date.now(), completed: false }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      taskList: toDoItems,
      task: "",
      id: undefined,
      completed: undefined
    }
  }
  handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addTask = (event) => {
    event.preventDefault()
  }
  clearCompleted = (event) => {
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <TodoList
          taskList={this.state.taskList}
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
