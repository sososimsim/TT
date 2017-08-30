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

export default function todaysTodo(todos = defaultTodaysTodos, action) {
  switch (action.type) {
    case actions.ADD_TODAYS_TODO:
      return todos;
    default:
      return todos;
  }
}
