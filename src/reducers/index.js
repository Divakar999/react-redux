import { combineReducers } from 'redux';
import articleReducer from './article';
import searchReducer from './search';

const rootReducer = combineReducers({
  articleState: articleReducer,
  searchState: searchReducer,
});

export default rootReducer;
