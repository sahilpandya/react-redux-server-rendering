import Immutable from 'immutable';
const defaultState = new Immutable.List();

export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case 'CREATE_TODO':
    	//action.res.data.text
      return state.concat(action.text);
    case 'EDIT_TODO':
      return state.set(action.id, action.text);
    case 'DELETE_TODO':
      return state.delete(action.id);
    case 'GET_TODOS':
  		return state.concat(action.res.data);
    default:
      return state;
  }
}