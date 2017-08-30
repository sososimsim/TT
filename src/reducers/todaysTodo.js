//먼저 리듀서에서 사용하기 위한 액션타입들을 불러옵니다.
import * as actions from '../actions/ActionTypes';

const defaultTodos = {
  todaysTodos: [],
  triedTodos: []
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
