import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const toDoItems = [
  { task: 'finish building ToDo App', id: (Date.now() + 1), completed: false},
  { task: 'work out', id: (Date.now() + 2), completed: false },
  { task: 'pray the rosary', id: (Date.now() + 3), completed: false },
  { task: 'brush my teeth', id: (Date.now() + 4), completed: false }
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
    this.setState({
      taskList: [
        ...this.state.taskList,
      {
        task: this.state.task,
        id: Date.now(),
        completed: false
      }]
    })
  }
  toggleCompleted = (id) => {
    this.setState(previousState => {
      const updatedToDoItems = previousState.taskList.map(toDoItem => {
        if (toDoItem.id === id) {
          toDoItem.completed = !toDoItem.completed
        }
        return toDoItem
      })
      return {
        taskList: updatedToDoItems
      }
    })
  }
  clearCompleted = (event) => {
    event.preventDefault()
    this.setState(previousState => {
      const completedToDoItems = previousState.taskList.filter(toDoItem => !toDoItem.completed)
      return {
        taskList: completedToDoItems
      }
    })
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
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
