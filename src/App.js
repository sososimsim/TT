import React, { Component } from 'react';
import './App.css';
import TodayInfo from './component/TodayInfo';
import TodoRegister from './component/TodoRegister';
import TodaysTodos from './component/TodaysTodos';
import TriedTodos from './component/TriedTodos';

class App extends Component {
  constructor(props){
    super(props);
    this.onRegisterTodo = this.onRegisterTodo.bind(this);
    // this.state = this.props.store.getState();
  }

  onRegisterTodo(newTodo){
    this.setState({
      todaysTodos: [...this.state.todaysTodos, newTodo]
    });
  }

  updateTodaysTodo = (targetTodo) => {
    this.setState({
      todaysTodos: this.state.todaysTodos.map((todo, id) => {
        return (targetTodo.id === id) ? {...todo, completed: targetTodo.completed, completedDate: targetTodo.completedDate} : todo;
      })
    }, ()=>{
      console.log(this.state.todaysTodos);
    });
  }

  deleteTodaysTodo = (targetTodo) => {
    this.setState({
      todaysTodo: this.state.todaysTodos.splice(targetTodo.id, 1)
    }, ()=>{
      console.log(this.state.todaysTodos);
    });
  }

  updateTriedTodo = (targetTodo) => {
    this.setState({
      triedTodos: this.state.triedTodos.map((todo, id) => {
        return (targetTodo.id === id) ? {...todo, completed: targetTodo.completed, completedDate: targetTodo.completedDate} : todo;
      })
    }, ()=>{
      console.log(this.state.triedTodos);
    });
  }

  render() {
    return (
      <main id="tt-wrapper">
        <TodayInfo/>
        <TodoRegister onRegister={this.onRegisterTodo}/>
        <TodaysTodos updateTodaysTodo={this.updateTodaysTodo} deleteTodo={this.deleteTodaysTodo}/>
        <TriedTodos updateTriedTodo={this.updateTriedTodo}/>
      </main>
    );
  }
}
export default App;
