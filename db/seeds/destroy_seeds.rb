def destroy_entities
  if Rails.env == "development"
    BookmarkTeam.destroy_all
    TeamMember.destroy_all
    Team.destroy_all
    BookmarkTag.destroy_all
    Bookmark.destroy_all
    Tag.destroy_all
    User.destroy_all
  else
    puts "Rails env is not development : Can't destroy all entities"
  end
end
