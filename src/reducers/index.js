//reducer가 2개 이상이 되면 reducer들을 하나로 합쳐야 합니다.
//직접 합칠 수도 있지만, redux에서 제공하는 combineReducers를 사용할 수도 있습니다.
import { combineReducers } from 'redux';

//합칠 reducer들을 불러옵니다.
import todaysTodo from './todaysTodo';
import triedTodo from './triedTodo';

const reducers = combineReducers({
  todaysTodo, triedTodo
});

export default reducers;
