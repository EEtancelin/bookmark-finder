class Bookmark < ApplicationRecord
  belongs_to :user
  has_many :bookmark_tags, dependent: :destroy
  has_many :tags, through: :bookmark_tags
  accepts_nested_attributes_for :tags

  has_many :bookmark_teams , dependent: :destroy
  has_many :teams, through: :bookmark_teams
  validates :url, uniqueness: { scope: :user_id }
end
