import React, { Component } from 'react'

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }
    
    onChange = (e) => {
       return this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        //this passes the value(state) of the title to the addTodo prop
        this.props.addTodo(this.state.title)
        //thus clears the input field
        this.setState({title: ''})
    }

    render() {
        return (
            <div>
                <form 
                 style = 
                {{display: 'flex',
                 padding: '5px', 
                 alignItems: 'center', 
                 flexDirection: 'column' 
                 }}
                 onSubmit = {this.onSubmit}
                 >
                    <input 
                        type = 'text'
                        name='title'
                        value ={this.state.title}
                        placeholder ="Add Todo..."
                        style = {inputStyle}
                        onChange = {this.onChange}
                    />
                    <input 
                        type ="submit"
                        value = "Submit"
                        style = {submitBtn}
                    />
                </form>
            </div>
        )
    }
}

const submitBtn = {
    borderRadius: '3px', 
    border: 'none', 
    padding: '5px',
    margin: '5px',
    color: 'whitesmoke',
    backgroundColor: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    boxShadow: '1px 1px 4px #dadada',
    fontFamily: 'sans-serif'                  
}

const inputStyle = {
    display: 'flex', 
    alignItems: 'center', 
    padding: '5px' , 
    margin: '5px', 
    borderRadius: '3px',
    boxSizing: 'border-box',
    border: '1px solid #c2c2c2'
}

export default AddTodo
