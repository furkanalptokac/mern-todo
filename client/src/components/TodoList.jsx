import React, { Component } from 'react';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.task}</td>
    </tr>
)

export default class TodosList extends Component{

	constructor(props){
		super(props);
		this.state = {todos: []};
	}

	componentDidMount(){
		axios.get('http://localhost:5000/api')
            .then(response => {
                console.log(response)
                this.setState({todos: response.data});
            }).catch(function(error){
                console.log(error);
            });
	}

	todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

	render(){
		return(
			<div>
                <tbody>
                    { this.todoList() }
                </tbody>
			</div>
		)
	}
}