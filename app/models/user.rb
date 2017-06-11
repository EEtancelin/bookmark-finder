class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  acts_as_token_authenticatable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :bookmarks

  has_many :team_member
  has_many :teams , through: :team_member

  has_many :teams_bookmarks, through: :teams , source: :bookmarks

  has_many :bookmark_tags, through: :bookmarks
  has_many :teams_bookmark_tags, through: :teams_bookmarks , source: :bookmark_tags

  has_many :tags, through: :bookmark_tags
  has_many :teams_tags, through: :teams_bookmark_tags , source: :tag

  def user_and_teams_bookmarks
    self.teams_bookmarks + self.bookmarks
  end

  def user_and_teams_bookmark_tags
    user_bt = self.bookmark_tags
    team_bt = self.teams_bookmark_tags
    user_bt + team_bt
  end

  def user_and_teams_tags
    user_tags = self.tags
    teams_tags = self.teams_tags
    user_tags + teams_tags
  end
end
