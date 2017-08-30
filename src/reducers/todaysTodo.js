//먼저 리듀서에서 사용하기 위한 액션타입들을 불러옵니다.
import * as actions from '../actions/ActionTypes';

const defaultTodos = {
  todaysTodos: [
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
  ],
  triedTodos: [
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

export default todaysTodo(todos = defaultTodos, action) {
  switch (action.type) {
    case actions.ADD_TODAYS_TODO:
      return {
        ...todos, todaysTodos: [...todos.todaysTodos, actions.todo]
      };
    default:
      return todos;
  }
}
