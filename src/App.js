import React, { Component } from 'react';
import './App.css';
import TodayInfo from './component/TodayInfo';
import TodoRegister from './component/TodoRegister';
import TodaysTodos from './component/TodaysTodos';
import TriedTodos from './component/TriedTodos';

class App extends Component {
  constructor(props){
    super();
    this.todoFilter = this.todoFilter.bind(this);
    this.onRegisterTodo = this.onRegisterTodo.bind(this);
    this.state = {
      todos: [
       // 오늘이 8월 10일(Aug 10 2017)인 상태,
       { // #Todays_todo 완료된 todo
         completed: true,
         registeredDate: new Date(),
         completedDate: new Date(),
         content: "리액트 스터디 과제하기"
       },
       { // #Todays_todo 아직 완료하지 않은 todo
         completed: false,
         registeredDate: new Date(),
         completedDate: null,
         content: "책상 정리하기"
       },
       { // 화면에 보이지 않는, 과거에 완료한 todo
         completed: true,
         registeredDate: new Date("8/10/2017"),
         completedDate: new Date("8/10/2017"),
         content: "책 반납하기"
       },
       { // #Tried_todo에 노출되는, 오늘보다 이전에 등록되었는데(registeredDate이 오늘 이전) 아직 완료하지 않은 todo
         completed: false,
         registeredDate: new Date("8/10/2017"),
         completedDate: null,
         content: "사진 출력하기"
       }
     ]
    };
  }

  todoFilter(filter){
    switch (filter) {
      case "today":
        //registeredDate가 오늘인 친구들
        return this._getTodaysTodos();
      case "tried":
        //registeredDate가 오늘 이전인데, completed가 false인 친구들
        return this._getTriedTodos();
      default:
        return this.state.todos;
    }
  }

  _getTodaysTodos(){
    return this.state.todos.filter(this._isToday);
  }

  _getTriedTodos(){
    const pastTodos = this.state.todos.filter(function(todo){
      if (this._isToday(todo)) {
        return false;
      } else {
        return true;
      }
    }.bind(this));
    return pastTodos.filter(this._isNotCompleted);
  }

  _isNotCompleted(todo){
    return todo.completed === false;
  }

  _isToday(todo){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const registeredDate = todo.registeredDate;
    const registeredYear = registeredDate.getFullYear();
    const registeredMonth = registeredDate.getMonth() + 1;
    const registeredDay = registeredDate.getDate();

    return (year === registeredYear) && (month === registeredMonth) && (day === registeredDay);
  }

  onRegisterTodo(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <main id="tt-wrapper">
        <TodayInfo/>
        <TodoRegister onRegister={this.onRegisterTodo}/>
        <TodaysTodos todaysTodos={this.todoFilter("today")}/>
        <TriedTodos triedTodos={this.todoFilter("tried")}/>
      </main>
    );
  }
}

export default App;
