
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import * as actions from '../actions/mainContentActionCreators';

// Which part of the Redux global state does our component want to receive as props?


const mapStateToProps = (state, ownprops) => {
  const tag = state.entities.get('tags').get(ownprops.tagId);
  return {
    title: tag.get('title'),
    id: tag.get('id'),
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(Tag);
