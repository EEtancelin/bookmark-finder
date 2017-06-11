
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home

    bookmarks = Bookmark.all.map{ |x| x.to_redux_entitie }.to_h
    bookmark_tag = BookmarkTag.all.map{ |x| x.to_redux_entitie}.to_h
    tag = Tag.all.map{ |x| x.to_redux_entitie }.to_h
    searchedTags = []

    if current_user
      user = {  userEmail: current_user.email ,
                token: current_user.authentication_token
              }
      teams = Team.all.map{ |x| x.to_redux_entitie }.to_h
      team_member = TeamMember.all.map{ |x| x.to_redux_entitie }.to_h
      bookmark_team = BookmarkTeam.all.map{ |x| x.to_redux_entitie }.to_h
    else
      user = {  userEmail: 'not loged',
            token:  'not loged'
          }
      teams = {}
      team_member = {}
      bookmark_teams = {}
    end

    @hello_world_props = {
      entities: {
        bookmarks: bookmarks,
        tags: tag,
        bookmarkTag: bookmark_tag,
        teams: teams,
        teamMembers: team_member,
        bookmarkTeams: bookmark_team
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
