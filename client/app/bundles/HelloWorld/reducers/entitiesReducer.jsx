import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

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
    .map(x => x.map(y => y.get('tag_id')).toSet())
  );
};

export const getBookmarksIdsForEachTag = (bookmarkTag) => {
  return (bookmarkTag
    .groupBy(bt => bt.get('tag_id'))
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
    associationMatrix[bt.get('bookmark_id')][bt.get('tag_id')] = 1
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

const tags = (state = Map({}), action) => {
  switch (action.type) {
    case 'CREATE_TAG':
      return state.set(action.tagId, Map({ id :action.tagId, title: action.tagTitle}));
    default:
      return state;
  }
};

const bookmarkTag = (state = Map({}), action) => {
  switch (action.type) {
    case 'ADD_TAG_TO_BOOKMARK':
      const bookmarkTag = Map({ id: action.bookmarkTagId, tag_id: action.tagId, bookmark_id: action.bookmark });
      return state.setIn(['bookmarkTag', action.bookmarkTagId ], bookmarkTag);

    case 'CREATE_TAG':
        const newBookmarkTag =
          Map({
            id: action.bookmarkTagId,
            bookmark_id: action.bookmark,
            tag_id: action.tagId })
        return (state.set(action.bookmarkTagId, newBookmarkTag ))
    case 'REMOVE_BOOKMARK':
      return (state.filterNot( bt =>
        (bt.get('bookmark_id') !== action.bookmark) &&
        (bt.get('tag_id') !== action.tag))
        );
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
