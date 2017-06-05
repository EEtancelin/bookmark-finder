
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home

    if current_user
    user = {  userEmail: current_user.email ,
              token: current_user.authentication_token
            }
    else
    user = {  userEmail: 'not loged',
              token:  'not loged'
            }
    end

    bookmarks = Bookmark.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
    bookmark_tag = BookmarkTag.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
    tag = Tag.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h

    searchedTags = []

    @hello_world_props = {
      entities: {
        bookmarks: bookmarks,
        tags: tag,
        bookmarkTag: bookmark_tag
      },
      ui:{
        searchedTags: searchedTags,
        searchBoxValue: '',
        showAddBookmarkForm: false
      },
      user: user,
      api: {
        isFetching: false
      }
    }

  end
end
