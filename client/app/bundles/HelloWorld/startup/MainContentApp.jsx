import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import configureStore from '../store/MainContentStore';
import MainContentContainer from '../containers/MainContentContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext



const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


const MainContentApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <MainContentContainer />
  </Provider>
);

export default MainContentApp;
