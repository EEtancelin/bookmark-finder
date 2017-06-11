
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    searchedTags = []

    if current_user
      bookmarks = current_user.user_and_teams_bookmarks.map{ |x| x.to_redux_entitie }.to_h
      bookmark_tag = current_user.user_and_teams_bookmark_tags.map{ |x| x.to_redux_entitie }.to_h
      tags = current_user.user_and_teams_tags.map{ |x| x.to_redux_entitie }.to_h
      user = {  userEmail: current_user.email ,
                token: current_user.authentication_token,
                id: current_user.id
              }
      teams = Team.all.map{ |x| x.to_redux_entitie }.to_h
      team_member = TeamMember.all.map{ |x| x.to_redux_entitie }.to_h
      bookmark_team = BookmarkTeam.all.map{ |x| x.to_redux_entitie }.to_h
    else
      user = {  userEmail: 'not loged',
            token:  'not loged'
          }
      bookmarks = Bookmark.all.map{ |x| x.to_redux_entitie }.to_h
      tags = Tag.all.map{ |x| x.to_redux_entitie }.to_h
      teams = {}
      team_member = {}
      bookmark_teams = {}
    end

    @hello_world_props = {
      entities: {
        bookmarks: bookmarks,
        tags: tags,
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
