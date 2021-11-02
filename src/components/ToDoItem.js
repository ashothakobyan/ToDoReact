import React from "react";

function ToDoItem({ item }) {
  return (
    <div>
      {item.text}
    </div>
  )
}

export default ToDoItem