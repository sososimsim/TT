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
    this.setState({
      completed: !this.state.completed
    }, ()=> {
      let completedDate = this.state.completed ? new Date() : null;
      this._setCompletedDate(completedDate);
    });
  }

  _setCompletedDate = (completedDate) => {
    this.setState({
      completedDate: completedDate
    }, ()=>{
      this.props.updateTodaysTodo(this.state)
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
