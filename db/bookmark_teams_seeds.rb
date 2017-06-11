def create_bteam(bookmark_title, team_name)
  bookmark = Bookmark.where(title: bookmark_title).first
  team = Team.where(name: team_name).first
  BookmarkTeam.create(bookmark: bookmark, team: team)
end

def seed_bookmark_team
  create_bteam("The myth of the Genius Programmer","BuyBay")
  create_bteam("React is Slow, React is Fast: Optimizing React Apps in Practice","BuyBay")
end
