import { createStore } from 'redux';
import MainContentReducer from '../reducers/MainContentReducer';

const configureStore = (railsProps) => (
  createStore(
    MainContentReducer,
    railsProps,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configureStore;
