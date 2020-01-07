import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import TodoItem from './components/TodoItem'
import todosData from './todosData'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
 
    handleChange(id) {
       this.setState(prevState => {
           const updatedTodos = prevState.todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed
                }
                return todo
           }) 
           return{
               todos: updatedTodos
           }
       })
    }

    render() {
        const todoComponents = this.state.todos.map((item) => { 
            return <TodoItem key={item.id} todos={item} handleChange = {this.handleChange}/>
        })
            return (
                <div>
                    <Header />
                    <MainContent />
                    <div className="todo-list">
                        {todoComponents}
                    </div>
                    {/* <Footer /> */}
                </div>
        );
    }
    
}

export default App;
