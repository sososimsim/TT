import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main id="tt-wrapper">
        <section id="today-info">
          <h2 className="today-date">오늘은<br/><b>8월 7일</b><br/><b>월요일</b>입니다</h2>
        </section>
        <section id="add-todays-todo">
          <input placeholder="오늘의 할 일을 추가해주세요" type="text"/>
          <button type="button" name="add-todo-button">+</button>
        </section>
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
      </main>
    );
  }
}

export default App;
