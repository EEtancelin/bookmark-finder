import { combineReducers } from 'redux-immutable';
import { Set } from 'immutable';
import { bookmarkTeams } from './bookmarkTeamsReducer';
import { bookmarks } from './bookmarksReducer';
import { teams } from './teamsReducer';
import { teamMembers } from './teamMembersReducer';

export const getProposedBookmarks = (state) => {
  const searchedTags = state.getIn(['ui', 'searchedTags']);
  return (
    state.getIn(['entities', 'bookmarks'])
    .filter(bookmark => bookmark.get('tags_a').isSuperset(searchedTags))
  );
};

export const getProposedBookmarksTagsTitles = (state) => {
  return (
    getProposedBookmarks(state)
    .reduce((total, value) => total.concat(value.get('tags_a')), Set([]))
  );
};

const entitiesReducer = combineReducers({
  bookmarks,
  teams,
  teamMembers,
  bookmarkTeams,
});

export default entitiesReducer;
