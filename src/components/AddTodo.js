import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <div>
                <form style = {{display: 'flex', padding: '5px', alignItems: 'center', flexDirection: 'column' }}>
                    <input 
                        type = 'text'
                        name='title'
                        placeholder ="Add Todo..."
                        style = {{ alignItems: 'center', }}
                    />
                    <input 
                        type ="submit"
                        value = "submit"
                        style = {{}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
