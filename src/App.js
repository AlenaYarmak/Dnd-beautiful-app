import { Component } from 'react';
/* import Button from 'react-bootstrap/Button'; */
import InitialState from './InitialState'
import Column from './Column'
import './App.css';


class App extends Component {
  state = InitialState;
  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      console.log(column);
      console.log(this.state.columnOrder);
      const tasks = column.taskIDs.map(taskID => this.state.tasks[taskID]);

      return <Column key={column.id} column={column} tasks={tasks}/>
    })
  }
}

export default App;
