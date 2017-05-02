import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import { tags } from './tagsReducer';
import { bookmarkTag } from './bookmarkTagsReducer';

// What is the tag hash corresponding to this title ?
export const findTagByTitle = (tags, title) => tags.find(t => t.get('title') === title);

// Is there Searched Tags ?
export const hasSearchedTags = state => !state.getIn(['ui', 'searchedTags']).isEmpty();


// Which Tag have One bookmark in Common with the searchedTags ?
export const getTagsRelatedToSearchedTags = (state) => {
  return (getTagsIdsAssociateToTags(state.getIn(['entities', 'bookmarkTag']), state.getIn(['ui', 'searchedTags'])))
}

// Which are the Ids of all existing tag ?
export const getAllTags = (state) => {
  return (state.getIn(['entities', 'bookmarkTag']).map(bt => bt.get('tag_uuid')).toSet())
};

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

export const getAssociationMatrix = (bookmarkTag) => {
  const associationMatrix = [];
  bookmarkTag.forEach(bt => {
    if (associationMatrix[bt.get('bookmark_id')] === undefined) {
      associationMatrix[bt.get('bookmark_id')] =[]
    }
    associationMatrix[bt.get('bookmark_id')][bt.get('tag_uuid')] = 1
  })
}

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

const bookmarks = (state = Map({}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const entitiesReducer = combineReducers({
  bookmarks,
  bookmarkTag,
  tags,
});

export default entitiesReducer;
