import React from 'react';
import Header from './components/Header'
import Todos from './components/Todos'
import {v4 as uuidv4} from 'uuid'
import AddTodo from './components/AddTodo';
// import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }

    }
    /**  This handles the onChange property of the checkbox when it is clicked
         This maps through the todos array where id is the same as the clicked todo, gets the value of the 'completed' property 
         and toggles it
         It returns the updated todo */
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

    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
        console.log(title)
    }

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo)=>{
                return todo.id !== id
            })]
        })
    }

    render() {       
            return (
                <div>
                    <Header />
                    <AddTodo addTodo = {this.addTodo}/>
                    <div className="todo-list">
                        <Todos todos = {this.state.todos} 
                               handleChange = {this.handleChange} 
                               delTodo = {this.delTodo} />
                    </div>
                </div>
        );
    }
    
}

export default App;
