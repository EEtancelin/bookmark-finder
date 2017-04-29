import { createStore } from 'redux';
import { fromJS } from 'immutable';
import MainContentReducer from '../reducers/MainContentReducer';


const configureStore = (railsProps) => (
  createStore(
    MainContentReducer,
    fromJS(railsProps),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configureStore;
