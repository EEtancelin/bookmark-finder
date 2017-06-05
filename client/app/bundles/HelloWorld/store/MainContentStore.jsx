import { createStore, applyMiddleware  } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import mainContentReducer from '../reducers/mainContentReducer';



const middleware = [ thunk ]
middleware.push(createLogger())

const configureStore = (railsProps) => (
  createStore(
    mainContentReducer,
    fromJS(railsProps),
    applyMiddleware(...middleware),
  )
  );

export default configureStore;
