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
// import React, {Component} from "react"

// /**
//  * Challenge: Wire up the partially-finished travel form so that it works!
//  * Remember to use the concept of controlled forms
//  * https://reactjs.org/docs/forms.html
//  * 
//  * All information should be populating the text below the form in real-time
//  * as you're filling it out
//  * 
//  * This exercise is adapted from the V School curriculum on vanilla JS forms:
//  * https://coursework.vschool.io/travel-form/
//  * 
//  * All of our challenges and learning resources are open for the public
//  * to play around with and learn from at https://coursework.vschool.io
//  */

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             destination: "France"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({
//             [name]: value
//         })
//     }
//     render() {
//         return (
//             <main>
//                 <form>
//                     <input placeholder="First Name" 
//                            type ="text"
//                            name ="firstName"
//                            onChange ={this.handleChange} 
//                     /> 
//                     <br />
                    
//                     <input placeholder="Last Name" 
//                            type ="text"
//                            name ="lastName"
//                            value ={this.state.firstName}
//                            onChange = {this.handleChange}
//                     /> 
//                     <br />
                    
//                     <input placeholder="Age" 
//                           type ="number"
//                           name ="age" 
//                           value ={this.state.lastName}
//                           onChange = {this.handleChange} 
//                     /> 
//                     <br /> <br />
//                     <label>
//                         <input 
//                             type ="radio"
//                             name ="gender"
//                             value ="Male"
//                             checked ={this.state.gender === "male"}
//                             onChange = {this.handleChange}
//                         /> Male                        
//                     </label>
                    
//                      <label>
//                         <input 
//                             type ="radio"
//                             name ="gender"
//                             value ="Female"
//                             checked ={this.state.gender === "female"}
//                             onChange = {this.handleChange}
//                         /> Female                        
//                     </label>
//                     <br /> <br />
                    
//                     <select
//                         value ={this.state.destination}
//                         onChange ={this.handleChange}
//                         name ="destination"
//                     >
//                         <option value ="France">France</option>
//                         <option value ="London">London</option>
//                         <option value ="FrankFurt">FrankFurt</option>
                        
//                     </select>                    
//                     <br />
                    
//                     {/* Create check boxes for dietary restrictions here */}
//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//                 <hr />
//                 <h2>Entered information:</h2>
//                 <p>Your name: {this.state.firstName + ' ' + this.state.lastName}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.gender}</p>
//                 <p>Your destination: {this.state.destination}</p>
//                 <p>
//                     Your dietary restrictions: 
//                     {/* Dietary restrictions here, comma separated */}
//                 </p>
//             </main>
//         )
//     }
// }

//export default App


export default TodoItem