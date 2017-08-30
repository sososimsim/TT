import React, { Component } from 'react';
import '../styles/TodaysTodos.css';
import TodaysTodo from './TodaysTodo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TodaysTodos extends Component {

  render(){
    let todaysTodoList = this.props.todaysTodos.map((todo, id)=>{
      return <TodaysTodo todo={todo} key={id} id={id} updateTodaysTodo={this.props.updateTodaysTodo} deleteTodo={this.props.deleteTodo}/>
    });
    return(
      <section id="todays-todo">
        <h4>#Todays_Todo</h4>
        <ul>
          {todaysTodoList}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  //"이 컴포넌트의 todaysTodos props에는 redux state의 todaysTodos를 연결해줘"
  return {
    todaysTodos: state.todaysTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodaysTodo: (todo) => { dispatch(actions.toggleTodaysTodo(todo)) },
    deleteTodo: (todo) => { dispatch(actions.deleteTodaysTodo(todo)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodaysTodos);
