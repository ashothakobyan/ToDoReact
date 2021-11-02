import React from "react";
import { toDoItems } from "../mock/toDoItems";

class ToDoHeader extends React.Component {

  state = {
    toDoName: ""
  }
  change = (e) => {
    this.setState({
      toDoName: e.target.value
    })
    // this.state.toDoName = e.target.value 
  }
  render() {
    return (
      <div>
        <h3>To do liste</h3>
        <input type="text" value={this.state.toDoName} onChange={this.change} />
        <button onClick={() => {
          toDoItems.push({
            text: this.state.toDoName,
            done: false
          })
          console.log(toDoItems)
        }}>Add</button>
      </div>
    )
  }
}

export default ToDoHeader