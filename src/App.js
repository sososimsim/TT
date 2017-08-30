import React, { Component } from 'react';
import './App.css';
import TodayInfo from './component/TodayInfo';
import TodoRegister from './component/TodoRegister';
import TodaysTodos from './component/TodaysTodos';
import TriedTodos from './component/TriedTodos';

class App extends Component {
  render() {
    return (
      <main id="tt-wrapper">
        <TodayInfo/>
        <TodoRegister/>
        <TodaysTodos/>
        <TriedTodos/>
      </main>
    );
  }
}
export default App;
