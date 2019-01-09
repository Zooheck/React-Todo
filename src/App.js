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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
          taskList={this.state.taskList}
        />
      </div>
    );
  }
}

export default App;
