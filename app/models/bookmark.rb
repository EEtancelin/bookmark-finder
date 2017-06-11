class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :bookmark_tags
  has_many :tags, through: :bookmark_tag

  has_many :bookmark_teams
  has_many :teams, through: :bookmark_teams
end
