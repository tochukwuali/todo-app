import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    render() {
        return this.props.todos.map((item) => (
            <TodoItem todos = {item} />
        ))
    }
}

export default Todos
