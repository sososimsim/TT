import React, { Component } from 'react';
import '../styles/TriedTodos.css';
import TriedTodo from './TriedTodo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TriedTodos extends Component {
  constructor(props){
    super();
  }

  _isNotCompletedToday(todo){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const completedDate = todo.completedDate;
    const completedYear = completedDate.getFullYear();
    const completedMonth = completedDate.getMonth() + 1;
    const completedDay = completedDate.getDate();
    const isNotToday = (year !== completedYear) || (month !== completedMonth) || (day !== completedDay);

    return isNotToday;
  };

  render(){
    return (
      <section id="tried-todo">
        <h4>#Tried_Todo</h4>
        <ul>
          {this.props.triedTodos.map((todo, id) => {
            //오늘 이전에, 이미 완료된 건 렌더 X
            return (todo.completed && this._isNotCompletedToday(todo)) ?
              "" : <TriedTodo todo={todo} key={id} id={id} updateTriedTodo={this.props.updateTriedTodo}/>;
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
