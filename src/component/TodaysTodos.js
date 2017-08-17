import React, { Component } from 'react';
import '../styles/TodaysTodos.css';
import TodaysTodo from './TodaysTodo';

class TodaysTodos extends Component {
  render(){
    return(
      <section id="todays-todo">
        <h4>#Todays_Todo</h4>
        <ul>
          {this.props.todaysTodos.map((todo, id)=>{
            return <TodaysTodo todo={todo} id={id}/>
          })}
        </ul>
      </section>
    );
  }
}

export default TodaysTodos;
