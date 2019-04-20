import { createStore, combineReducers } from 'redux';
import page from './reducers/pageReducer';

const reducerList = combineReducers({
  page,
});

export default createStore(reducerList);
