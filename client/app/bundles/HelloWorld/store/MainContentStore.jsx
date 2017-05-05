import { createStore, applyMiddleware  } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import MainContentReducer from '../reducers/MainContentReducer';



const middleware = [ thunk ]
middleware.push(createLogger())

const configureStore = (railsProps) => (
  createStore(
    MainContentReducer,
    fromJS(railsProps),
    applyMiddleware(...middleware),
  )
  );

export default configureStore;
