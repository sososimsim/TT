import * as actions from '../actions/actionTypes';

const defaultTriedTodos = [
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
];

//TODO 실제 동작 구현하기
export default function triedTodos(todos = defaultTriedTodos, action){
  switch (action.type) {
    case actions.COMPLETE_TRIED_TODO:
      return todos;
    case actions.RESET_TO_NOT_COMPLETED_TRIED_TODO:
      return todos;
    default:
      return todos;
  }
}
