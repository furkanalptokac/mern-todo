import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoList from './components/TodoList';

export default class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <h3>Todos</h3>
          <Route path="/" exact component={TodoList} /> 
        </div>
      </Router>
    );
  }
}