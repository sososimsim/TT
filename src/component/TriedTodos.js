import React, { Component } from 'react';
import '../styles/TriedTodos.css';
import TriedTodo from './TriedTodo';

class TriedTodos extends Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <section id="tried-todo">
        <h4>#Tried_Todo</h4>
        <ul>
          {this.props.triedTodos.map((todo, id) => {
            return <TriedTodo todo={todo} key={id} id={id} updateTriedTodo={this.props.updateTriedTodo}/>
          })}
        </ul>
      </section>
    );
  }
}

export default TriedTodos;
