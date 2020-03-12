import React from 'react';
import Header from './components/Header'
import Todos from './components/Todos'

import todosData from './todosData'
import AddTodo from './components/AddTodo';
// import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
       // this.handleChange = this.handleChange.bind(this)
    }
 
    handleChange = (id) => {
       this.setState(prevState => {
           const updatedTodos = prevState.todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed
                }
                return todo
           }) 
           return {
               todos: updatedTodos
           }
       })
    }

    render() {       
            return (
                <div>
                    <Header />
                    <AddTodo />
                    <div className="todo-list">
                        <Todos todos = {this.state.todos} handleChange = {this.handleChange} />
                    </div>
                </div>
        );
    }
    
}

export default App;
