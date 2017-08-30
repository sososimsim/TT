//먼저 리듀서에서 사용하기 위한 액션타입들을 불러옵니다.
import * as actions from '../actions/actionTypes';

const defaultTodaysTodos = [
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
  }
];

export default function todaysTodos(todos = defaultTodaysTodos, action) {
  let targetTodo = action.todo;

  switch (action.type) {
    case actions.ADD_TODAYS_TODO:
      return [ ...todos, targetTodo ];

    case actions.COMPLETE_TODAYS_TODO:
      return todos.map((todo, id) => {
        return (targetTodo.id === id) ? {
          ...todo,
          completed: true,
          completedDate: targetTodo.completedDate
        } : todo;
      });

    case actions.RESET_TO_NOT_COMPLETED_TODAYS_TODO:
      return todos.map((todo, id) => {
        return (targetTodo.id === id) ? {
          ...todo,
          completed: false,
          completedDate: null
        } : todo;
      });

    case actions.DELETE_TODAYS_TODO:
      return todos;
      
    default:
      return todos;
  }
}
