import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    
    render() {
        
      return this.props.todos.map((item) => {
           return <TodoItem key = {item.id} todos = {item} handleChange = {this.props.handleChange}/>
        })
    }
}

export default Todos
