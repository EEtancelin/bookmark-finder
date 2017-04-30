
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import { addSearchedTag } from '../actions/searchBoxActionCreators'

// Which part of the Redux global state does our component want to receive as props?

const mapDispatchToProps = (dispatch, ownprops ) => {
  return {
    onRemoveClick: () => (
      dispatch({ type: 'REMOVE_BOOKMARK', tag: ownprops.tagId, bookmark: ownprops.bookmark })
    ),
    onClick: () => (dispatch(addSearchedTag(ownprops.tagId))),
  };
}


const mapStateToProps = (state, ownprops) => {
  const tag = state.get('entities').get('tags').get(ownprops.tagId.toString());
  return {
    title: tag.get('title'),
    id: tag.get('id'),
    showRemoveButton: ownprops.bookmark,
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(Tag);
