import React, { Component } from 'react';
import '../styles/TodaysTodos.css';
import TodaysTodo from './TodaysTodo';

class TodaysTodos extends Component {
  
  render(){
    let todaysTodoList = this.props.todaysTodos.map((todo, id)=>{
      return <TodaysTodo todo={todo} id={id} index={id} updateTodaysTodo={this.props.updateTodaysTodo}/>
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

export default TodaysTodos;
