import React, { Component } from 'react';
import '../styles/TriedTodos.css';
import TriedTodo from './TriedTodo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TriedTodos extends Component {
  constructor(props){
    super();
  }

  _getTriedTodos(todos){
    const pastTodos = todos.filter(function(todo){
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

  render(){
    let triedTodos = this._getTriedTodos(this.props.triedTodos);
    return (
      <section id="tried-todo">
        <h4>#Tried_Todo</h4>
        <ul>
          {triedTodos.map((todo, id) => {
            return <TriedTodo todo={todo} key={id} id={id} updateTriedTodo={this.props.updateTriedTodo}/>
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    triedTodos: state.triedTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTriedTodo: (todo) => { dispatch(actions.toggleTriedTodo(todo)) },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TriedTodos);
