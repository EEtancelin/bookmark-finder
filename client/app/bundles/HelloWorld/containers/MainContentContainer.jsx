// Simple example of a React "smart" component

import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import * as actions from '../actions/mainContentActionCreators';
import { showAddBookmarkForm } from '../actions/mainContentActionCreators';


// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ name: state.name });
const mapDispatchToProps = (dispatch, ownprops) => (
  { onShowAddBookmarkFormClick: () => dispatch(showAddBookmarkForm()) }
);

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
