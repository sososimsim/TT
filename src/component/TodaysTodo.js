import React, { Component } from 'react';

class TodaysTodo extends Component {
  constructor(props){
    super();
    this.state = {
      completed: props.todo.completed,
      completedDate: props.todo.completedDate,
      content: props.todo.content,
      id: props.id
    }
  }

  toggleCompleteState = () => {
    let tobeCompleteState = !this.state.completed;
    let completedDate = tobeCompleteState ? new Date() : null;

    this.setState({
      completed: tobeCompleteState,
      completedDate: completedDate
    }, ()=> {
      this.props.updateTodaysTodo(this.state)
    });
  }

  deleteTodo = () => {
    this.props.deleteTodo(this.state);
  }

  render(){
    return(
      <li className={"todays-todo" + (this.state.completed ? " completed" : "")}>
        <input name="todays-todo" type="checkbox" className="toggle" onClick={this.toggleCompleteState}/>
        <label htmlFor="todays-todo">{this.props.todo.content}</label>
        <button type="button" className="delete" onClick={this.deleteTodo}>X</button>
      </li>
    );
  };
}

export default TodaysTodo;
