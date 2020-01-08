import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" name="todo" 
            checked = {props.todos.completed}
            onChange = {() => props.handleChange(props.todos.id)}
            />
            <label style = {props.todos.completed ? completedStyle : null }>{props.todos.text}</label>
        </div>
    )
}

export default TodoItem