import React, { Component } from 'react';
import '../styles/TodaysTodos.css';

class TodaysTodos extends Component {
  render(){
    return(
      <section id="todays-todo">
        <h4>#Todays_Todo</h4>
        <ul>
          <li className="todays-todo completed">
            <input name="todays-todo" type="checkbox" className="toggle"/>
            <label htmlFor="todays-todo">스토어팜 이슈 확인하기</label>
            <button type="button" className="delete">X</button>
          </li>
          <li className="todays-todo">
            <input name="todays-todo" type="checkbox" className="toggle"/>
            <label htmlFor="todays-todo">점심 회식</label>
            <button type="button" className="delete">X</button>
          </li>
          <li className="todays-todo">
            <input name="todays-todo" type="checkbox" className="toggle"/>
            <label htmlFor="todays-todo">리액트 스터디 과제하기</label>
            <button type="button" className="delete">X</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default TodaysTodos;
