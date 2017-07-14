import { combineReducers } from 'redux-immutable';
import { tags } from './tagsReducer';
import { bookmarkTag } from './bookmarkTagsReducer';
import { bookmarkTeams } from './bookmarkTeamsReducer';
import { bookmarks } from './bookmarksReducer';
import { teams } from './teamsReducer';
import { teamMembers } from './teamMembersReducer';

// What is the tag hash corresponding to this title ?
export const findTagByTitle = (tags, title) => tags.find(t => t.get('title') === title);


export const getProposedTagsTitles = (state) => {
  const searchedTags = state.getIn(['ui', 'searchedTags'])
  return (
    state.getIn(['entities', 'bookmarks'])
    .filter()
  );
};

// Which Tag have one bookmark in Common with the searchedTags ?
export const getTagsIdsAssociateToBookmarks = (bookmarkTag, bookmarks) => {
  return (getBookmarksIdsForEachTag(bookmarkTag)
    .filter(bookmarkTags => !bookmarkTags.intersect(bookmarks).isEmpty())
    .keySeq()
  );
};

// Which tags have one bookmark in common with the provided tags ?
export const getTagsIdsAssociateToTags = (bookmarkTag, tags) => {
  return (getTagsIdsAssociateToBookmarks(
      bookmarkTag, getBookmarksIdsAssociateToTags(bookmarkTag, tags)
  )
  );
};

export const getTagsIdsForEachBookmark = (bookmarkTag) => {
  return (bookmarkTag
    .groupBy(bt => bt.get('bookmark_id'))
    .map(x => x.map(y => y.get('tag_uuid')).toSet())
  );
};

export const getBookmarksIdsForEachTag = (bookmarkTag) => {
  return (bookmarkTag
    .groupBy(bt => bt.get('tag_uuid'))
    .map(x => x.map(y => y.get('bookmark_id')).toSet())
  );
};


export const isNewBookmark = (state, title) => {
  return (!(state.hasIn(['tags', 'title'], title)));
};

// Selector
export const getTagsByBookmark = (bookmarkTag, bookmarkId) => {
  return (getTagsIdsForEachBookmark(bookmarkTag).get(bookmarkId));
};

export const getBookmarksIdsAssociateToTags = (bookmarkTag, tags) => {
  return (getTagsIdsForEachBookmark(bookmarkTag)
    .filter(bookmarkTags => bookmarkTags.isSuperset(tags))
    .keySeq()
  );
};

const entitiesReducer = combineReducers({
  bookmarks,
  bookmarkTag,
  tags,
  teams,
  teamMembers,
  bookmarkTeams,
});

export default entitiesReducer;
