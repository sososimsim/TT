//actions 디렉토리만 불러왔을 때에 바로 이 ActionCreator가 로드되도록 하기 위해 파일 이름을 index.js로 짓습니다.

//미리 정의해두었던 action들을 불러옵니다.
import * as actions from './actionTypes';

//적절한 액션을 돌려주는 액션생성자ActionCreator들을 정의하고, export합니다.
export function addTodaysTodo(todo){
  return {
    type: actions.ADD_TODAYS_TODO,
    todo: todo
  }
}

export function toggleTodaysTodo(todo){
  if (todo.completed) {
    return {
      type: actions.COMPLETE_TODAYS_TODO,
      todo: todo
    }
  } else {
    return {
      type: actions.RESET_TO_NOT_COMPLETED_TODAYS_TODO,
      todo: todo
    }
  }
}

export function deleteTodaysTodo(todo){
  return {
    type: actions.DELETE_TODAYS_TODO,
    todo: todo
  }
}

export function toggleTriedTodo(todo){
  if (todo.completed) {
    return {
      type: actions.COMPLETE_TRIED_TODO,
      todo: todo
    }
  } else {
    return {
      type: actions.RESET_TO_NOT_COMPLETED_TRIED_TODO,
      todo: todo
    }
  }
}
