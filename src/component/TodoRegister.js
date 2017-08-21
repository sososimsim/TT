import React, { Component } from 'react';
import '../styles/TodoRegister.css';

class TodoRegister extends Component {
  constructor(){
    super();
    this.state = {
      newTodo: ""
    };
  }

  onChange = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  }

  onClickButton = () => {
    let newTodoData = {
      completed: false,
      registeredDate: new Date(),
      completedDate: null,
      content: this.state.newTodo
    };
    this.props.onRegister(newTodoData);
  }

  onEnter = (e) => {
    if (e.which === 13){
      let newTodoData = {
        completed: false,
        registeredDate: new Date(),
        completedDate: null,
        content: this.state.newTodo
      };
      this.props.onRegister(newTodoData);
    }
  }

  render(){
    return (
      <section id="add-todays-todo">
        <input placeholder="오늘의 할 일을 추가해주세요" type="text" value={this.state.newTodo}
          onChange={this.onChange} onKeyUp={this.onEnter}/>
        <button type="button" name="add-todo-button" onClick={this.onClickButton}>+</button>
      </section>
    );
  }
}

export default TodoRegister;
