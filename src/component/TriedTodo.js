import React, { Component } from 'react';

class TriedTodo extends Component {
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
      console.log(this.state);
      this.props.updateTriedTodo(this.state)
    });
  }

  formatDate(date){
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "/" + month + "/" + day;
  }

  render(){
    return(
      <li className={"tried-todo" + (this.state.completed ? " completed" : "")}>
        <input name="tried-todo" type="checkbox" className="toggle" onClick={this.toggleCompleteState}/>
        <label htmlFor="tried-todo">{this.props.todo.content}</label>
        <span className="tried-date">{this.formatDate(this.props.todo.registeredDate)}</span>
      </li>
    );
  };
}

export default TriedTodo;
