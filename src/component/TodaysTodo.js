import React, { Component } from 'react';

class TodaysTodo extends Component {
  constructor(props){
    super();
    this.state = {
      completed: props.todo.completed
    }
  }

  toggleCompleteState = () => {
    this.setState({
      completed: !this.state.completed
    });
  }

  render(){
    return(
      <li className={"todays-todo" + (this.state.completed ? " completed" : "")}>
        <input name="todays-todo" type="checkbox" className="toggle" onClick={this.toggleCompleteState}/>
        <label htmlFor="todays-todo">{this.props.todo.content}</label>
        <button type="button" className="delete">X</button>
      </li>
    );
  };
}

export default TodaysTodo;
