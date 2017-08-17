import React, { Component } from 'react';
import '../styles/TodoRegister.css';

class TodoRegister extends Component {
  render(){
    return (
      <section id="add-todays-todo">
        <input placeholder="오늘의 할 일을 추가해주세요" type="text"/>
        <button type="button" name="add-todo-button">+</button>
      </section>
    );
  }
}

export default TodoRegister;
