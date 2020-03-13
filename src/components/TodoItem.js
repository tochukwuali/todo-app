import React, { Component } from 'react'

class TodoItem extends Component {

//Style for the completed todo items

    render() {
        //using destructuring to pull out the values of this.props.todo. So you could also write 'this.props.todos.text' or 'this.props.todos.id'
        const { id, title } = this.props.todos
           return (
            <div className = "todo-item">
                <input 
                    type="checkbox"
                    onChange = {this.props.handleChange.bind(this, id)}
                />
               <p style = {this.props.todos.completed ? completedStyle : null}> {title} </p>
                <button className = "buttonStyle" onClick = {this.props.delTodo.bind(this, id)}> x </button>
            </div>
            
        )
    }
}

const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

export default TodoItem
