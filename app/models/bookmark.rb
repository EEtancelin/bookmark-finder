class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :bookmarkTags
  has_many :tags, through: :bookmarkTag

  has_many :bookmarkTeams
  has_many :teams, through: :bookmarkTeams
end
