
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home

    bookmarks = Bookmark.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
    bookmark_tag = BookmarkTag.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
    tag = Tag.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
    searchedTags = []
    teams = {}
    team_member = {}
    if current_user
      user = {  userEmail: current_user.email ,
                token: current_user.authentication_token
              }
      teams = Team.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
      team_member = TeamMember.all.map{ |x| [x.id.to_s, x.to_redux_hash]}.to_h
    else
      user = {  userEmail: 'not loged',
            token:  'not loged'
          }
      teams = {}
      team_member = {}

    end

    @hello_world_props = {
      entities: {
        bookmarks: bookmarks,
        tags: tag,
        bookmarkTag: bookmark_tag,
        teams: teams,
        teamMembers: team_member
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
