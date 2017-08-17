import React, { Component } from 'react';

class TriedTodo extends Component {
  formatDate(date){
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "/" + month + "/" + day;
  }

  render(){
    return(
      <li className="tried-todo">
        <input name="tried-todo" type="checkbox" className="toggle"/>
        <label htmlFor="tried-todo">{this.props.todo.content}</label>
        <span className="tried-date">{this.formatDate(this.props.todo.registeredDate)}</span>
      </li>
    );
  };
}

export default TriedTodo;
