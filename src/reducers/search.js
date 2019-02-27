import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

console.log(searchRequest);
console.log(searchSuccess);
console.log(searchFailure);

const serials = handleActions(
  {
    [searchSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  serials,
  error
});
