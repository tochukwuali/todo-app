import React, { Component } from 'react'

class TodoItem extends Component {

    render() {
           return (
            <div>
                <p>{this.props.todos.text} </p>
            </div>
        )
    }
}

export default TodoItem
