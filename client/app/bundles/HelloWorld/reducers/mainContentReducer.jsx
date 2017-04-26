
import { combineReducers } from 'redux';
import { Map, fromJS } from 'immutable';
import { UPDATE_SEARCHED_TAG, UPDATE_SEARCH_BOX_VALUE } from '../constants/mainContentConstants';

const getNewBookmarkTagId = (bookmarkTag) => {
  return ((bookmarkTag.map(t => parseInt(t.get('id'))).max() + 1).toString());
};

const entities = (state = Map({}), action) => {
  switch (action.type) {
    case '@@INIT':
      return fromJS(state);
    case 'ADD_TAG_TO_BOOKMARK':
      const tag = state.get('tags').find(tag => tag.get('title') === action.tagTitle);
      const tagId = tag.get('id')
      const bookmarkTagId = getNewBookmarkTagId (state.get('bookmarkTag'));
      const bookmarkTag = Map({ id: bookmarkTagId,  tag: tagId, bookmark:action.bookmark });
      return state.setIn(['bookmarkTag', bookmarkTagId], bookmarkTag);

    case 'CREATE_TAG':
      let newState = state.setIn(['tags', action.tagId], Map({ id :action.tagId, title: action.tagTitle}));
      const bookmarkTagIdd = getNewBookmarkTagId (state.get('bookmarkTag'));
      newState = newState.setIn(['bookmarkTag', bookmarkTagIdd], Map({ id: bookmarkTagIdd, tag: action.tagId, bookmark: action.bookmark }))
      return newState;
    case 'REMOVE_BOOKMARK':
      return (state.setIn(['bookmarkTag'],
        state.get('bookmarkTag').filter(bt =>
          (bt.get('bookmark_id') !== action.bookmark)
          || (bt.get('tag_id') !== action.tag)
        )
      ));
    default:
      return state;
  }
};

const ui = (state = Map({}), action) => {
  switch (action.type) {
    case UPDATE_SEARCHED_TAG:
      return state.setIn(['searchedTags'], (action.tags).toSet());
    case UPDATE_SEARCH_BOX_VALUE:
      return state.setIn(['searchBoxValue'], (action.value));
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const user = (state = Map({}), action) => {
  switch (action.type) {
    case '@@INIT':
      return fromJS(state);
    default:
      return state;
  }
};

const mainContentReducer = combineReducers({
  entities,
  ui,
  user,
});

export default mainContentReducer;

export const getAssociationMatrix = (bookmarkTag) => {
  const associationMatrix = [];
  bookmarkTag.forEach(bt => {
    if (associationMatrix[bt.get('bookmark_id')] === undefined) {
      associationMatrix[bt.get('bookmark_id')] =[]
    }
    associationMatrix[bt.get('bookmark_id')][bt.get('tag_id')] = 1
  })
}

export const getTagsIdsForEachBookmark = (bookmarkTag) => {
  return (bookmarkTag
    .groupBy(bt => bt.get('bookmark_id'))
    .map(x => x.map(y => y.get('tag_id')).toSet())
  );
};

export const getBookmarksIdsForEachTag = (bookmarkTag) => {
  return (bookmarkTag
    .groupBy(bt => bt.get('tag_id'))
    .map(x => x.map(y => y.get('bookmark_id')).toSet())
  );
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
