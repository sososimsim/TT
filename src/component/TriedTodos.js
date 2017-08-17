import React, { Component } from 'react';
import '../styles/TriedTodos.css';

class TriedTodos extends Component {
  render(){
    return (
      <section id="tried-todo">
        <h4>#Tried_Todo</h4>
        <ul>
          <li className="tried-todo">
            <input name="tried-todo" type="checkbox" className="toggle"/>
            <label htmlFor="tried-todo">테이블 야자에 꽂을 무언가 찾기</label>
            <span className="tried-date">17.08.08</span>
          </li>
          <li className="tried-todo">
            <input name="tried-todo" type="checkbox" className="toggle"/>
            <label htmlFor="tried-todo">TT 마크업 짜기</label>
            <span className="tried-date">17.08.09</span>
          </li>
        </ul>
      </section>
    );
  }
}

export default TriedTodos;
