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
      shownItems: toDoItems,
      task: "",
      searchValue: "",
      id: undefined,
      completed: undefined
    }
  }
  handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.searchValue.length > 0) {
      this.searchList(event.target.value);
    }
  };
  searchList = (searchText) => {
    if (searchText.length > 0) {
      const shownItemsArray = this.state.taskList.filter(task => {
        if (
          JSON.stringify(task)
          .toLowerCase()
          .includes(searchText.toLowerCase())
        ) {
          return true
        }
      })
      this.setState({
        shownItems: shownItemsArray,
      })
    }
    else {
      this.setState({
        shownItems: this.state.taskList
      })
    }
    }
  
  // searchTasks = (event) => {
  //   this.handleChanges(event)
  //   // CHECK IF SEARCHVALUE STATE IS EQUAL TO ANY INSTANCE OF this.state.taskList.task
  //   const previousStateCopy = [...this.state.taskList]
  //   this.setState(previousState => {
  //     const updatedToDoItems = previousState.taskList.filter(task => {
  //       task.task === this.state.searchValue
  //     })
  //     return {
  //       taskList: updatedToDoItems
  //     }
  //   })
  // }
  addTask = (event) => {
    event.preventDefault()
    const newTaskList = [...this.state.taskList, {task: this.state.task, id: Date.now(), completed: false}]
    this.setState({
      taskList: newTaskList,
      shownItems: newTaskList
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
        taskList: updatedToDoItems,
        shownItems: updatedToDoItems
      }
    })
  }
  clearCompleted = (event) => {
    event.preventDefault()
    this.setState(previousState => {
      const completedToDoItems = previousState.taskList.filter(toDoItem => !toDoItem.completed)
      return {
        taskList: completedToDoItems,
        shownItems: completedToDoItems
      }
    })
  }
  render() {
    return (
      <div>
        <TodoList
          taskList={this.state.shownItems}
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
          searchTasks={this.handleChanges}
          searchValue={this.state.searchValue}
          clearCompleted={this.clearCompleted}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
