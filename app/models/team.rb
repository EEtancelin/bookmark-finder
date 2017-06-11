class Team < ApplicationRecord
  has_many :team_member
  has_many :user, through: :team_member

  has_many :bookmark_teams
  has_many :bookmarks, through: :bookmark_teams

end
