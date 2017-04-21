// Simple example of a React "smart" component

import { connect } from 'react-redux';
import TagList from '../components/TagList';
import * as actions from '../actions/mainContentActionCreators';

const getTagsByBookmark = (bookmarkTagList, bookmarkId) => (
  bookmarkTagList
    .filter(t => t.get('bookmark') === bookmarkId)
    .map(x => x.get('tag'))
    .toSet()
);

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state, ownprops) => ({
  tags: ownprops.tags.toSet(),
});

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(TagList);
