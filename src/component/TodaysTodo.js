import React, { Component } from 'react';

class TodaysTodo extends Component {
  render(){
    return(
      <li className={"todays-todo " + (this.props.todo.completed && "completed")}>
        <input name="todays-todo" type="checkbox" className="toggle"/>
        <label htmlFor="todays-todo">{this.props.todo.content}</label>
        <button type="button" className="delete">X</button>
      </li>
    );
  };
}

export default TodaysTodo;
