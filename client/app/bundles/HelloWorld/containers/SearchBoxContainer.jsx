
import { connect } from 'react-redux';
import { Set } from 'immutable';
import SearchBox from '../components/SearchBox';
import { updateSearchedTag } from '../actions/searchBoxActionCreators';
import { updateSearchBoxValue } from '../actions/searchBoxActionCreators';
import { getTagsIdsAssociateToTags } from '../reducers/entitiesReducer';


// Is there Searched Tags ?
const hasSearchedTags = (state) =>  {
  return (state.get('ui').get('searchedTags').count() > 0);
}

// Which Tag to propose to the user ?
const getProposedTags = (state) => {
  return (hasSearchedTags(state) ? getTagsIdsAssociateToTags(state.get('entities').get('bookmarkTag'), state.get('ui').get('searchedTags')) : getAllTags(state))
};

// Which are the Ids of all existing tag ?
const getAllTags = (state) => {
  return (state.get('entities').get('bookmarkTag').map(bt => bt.get('tag_id')).toSet())
};

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => {
  return {
    tags: state.get('entities').get('tags'),
    inputValue: state.get('ui').get('searchBoxValue'),
    searchedTags: state.get('ui').get('searchedTags').toSet(),
    proposedTags: getProposedTags(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchedTagsUpdate: (value) => { dispatch(updateSearchedTag(value)); },
    onDeleteTagsClick: () => { dispatch(updateSearchedTag(Set([]))); },
    onSearchBoxValueChange: (value) => { dispatch(updateSearchBoxValue(value)); },
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
